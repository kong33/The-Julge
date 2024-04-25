import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import ShopService from '@/apis/shop/Shop.service';
import { GetShopRes } from '@/apis/shop/shop.type';
import { NoticeListArticle, ShopArticle } from '@/components/layout/shop/Article';
import MainLayout from '@/layouts/MainLayout';
import { pageList } from '@/libs/constants/contants';
import styles from '@/pages/shop/index.module.scss';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { shopId }: { shopId?: string } = query;

  if (!shopId) {
    return {
      notFound: true
    };
  }

  const { data: shopData } = await ShopService.getShop(shopId);
  const { data: noticeListData } = await NoticeService.getNoticeListByShopId(shopId, {});

  if (!shopData?.item) {
    return {
      notFound: true
    };
  }

  return {
    props: { shopData, noticeListData, notFound: false }
  };
};

// (shopId O) 사장님 가게 상세
export default function ShopDetailPage({
  shopData,
  noticeListData
}: {
  shopData: GetShopRes;
  noticeListData: GetNoticeListByShopIdRes;
}) {
  const router = useRouter();

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  // 쿠키로 대체되면 tpyeof window === 'undefined' 제거
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token') ?? '';
    if (!token) {
      router.replace(pageList.login());
    }
  }

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>내 가게</h1>
        <ShopArticle shopData={shopData} />
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>{noticeListData.items?.length === 0 ? '' : '내가 '}등록한 공고</h1>
        <NoticeListArticle shopData={shopData} noticeListData={noticeListData} />
      </section>
    </>
  );
}

ShopDetailPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
