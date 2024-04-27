import { jwtDecode } from 'jwt-decode';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticeRes } from '@/apis/notice/notice.type';
import UserService from '@/apis/user/User.service';
import { GetUserRes } from '@/apis/user/user.type';
import AsyncBoundary from '@/components/common/AsyncBoundary';
import { NoticeArticleNoLogin } from '@/components/layout/notice/Article';
import MainLayout from '@/layouts/MainLayout';
import { pageList } from '@/libs/constants/contants';
import styles from '@/pages/notice/[shopId]/[noticeId]/index.module.scss';

// 클라이언트 사이드에서만 로드; 403 에러 방지
const NoticeArticle = dynamic(() => import('@/components/layout/notice/Article'), {
  ssr: false // SSR 금지
});

// 토큰 나중에 쿠키로 대체
// jwtDecode
const token =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NzM2YWRiNy1mYThlLTRkMjMtYTE0My1jZDc0NjFlZjdiNzgiLCJpYXQiOjE3MTQyNDU2MDJ9.LZUYqMoZky-XpzD4NP4OoihDqnzmO9BKEtFnhnbisUw';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { shopId, noticeId }: { shopId?: string; noticeId?: string } = query;

  const userId = jwtDecode<{ userId: string }>(token).userId ?? '';
  const { data: userData } = await UserService.getUser(userId);

  // shopId나 noticeId가 없으면 홈페이지로 리다이렉트
  if (!shopId || !noticeId) {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }

  const { data: noticeData } = await NoticeService.getNotice(shopId, noticeId);

  if (!noticeData?.item) {
    return {
      notFound: true
    };
  }

  // 최근에 본 공고 {userId: [{shopId, noticeId}, ...]}를 쿠키에서 가져와서 전부 getNotice(shopId, noticeId)
  // 데이터를 RecentNoticeListData로 반환

  return {
    props: { noticeData, userData, notFound: false }
  };
};

// (shopId O) 사장님 가게 상세
export default function NoticeDetailPage({
  noticeData,
  userData
}: {
  noticeData: GetNoticeRes;
  userData: GetUserRes | null;
}) {
  const { name, category } = noticeData?.item?.shop?.item ?? null;

  // 로그인 상태에 따라 구분
  // eslint-disable-next-line react/no-unstable-nested-components
  function SelectNoticeArticle() {
    if (!userData?.item) return <NoticeArticleNoLogin noticeData={noticeData} />;
    if (userData?.item?.type !== 'employee') return <NoticeArticleNoLogin noticeData={noticeData} />;
    return <NoticeArticle noticeData={noticeData} userData={userData} />;
  }

  return (
    <>
      <section className={styles.section}>
        <p className={styles.category}>{category}</p>
        <h1 className={styles.title}>{name}</h1>
        <AsyncBoundary>{SelectNoticeArticle()}</AsyncBoundary>
      </section>
      <section className={styles.sectionBottom}>
        <h1 className={styles.title}>최근에 본 공고</h1>
        {/* <AsyncBoundary>
          <RecentNoticeListArticle shopData={shopData} noticeListData={noticeListData} />
        </AsyncBoundary> */}
      </section>
    </>
  );
}

NoticeDetailPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
