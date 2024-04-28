import { jwtDecode } from 'jwt-decode';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';

import NoticeService from '@/apis/notice/Notice.service';
import { GetNoticeListByShopIdRes } from '@/apis/notice/notice.type';
import ShopService from '@/apis/shop/Shop.service';
import { GetShopRes } from '@/apis/shop/shop.type';
import UserService from '@/apis/user/User.service';
import AsyncBoundary from '@/components/common/AsyncBoundary/AsyncBoundary';
import { NoticeListArticle, ShopArticle } from '@/components/layout/shop/Article';
import MainLayout from '@/layouts/MainLayout';
import { defaultLimit, pageList } from '@/libs/constants/contants';
import styles from '@/pages/shop/[shopId]/index.module.scss';

// 토큰 나중에 쿠키로 대체
// jwtDecode
const token =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMWFiNjk1My03MTNkLTQwNWEtOWM2NC05Njk0ZTFmZTFmOTQiLCJpYXQiOjE3MTQwNTYyOTZ9.OTO68dwg4m6AHcyHk841GlAf22OWKt5PxeTpHW_TGR4';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // token이 없으면 홈페이지로 리다이렉트
  if (!token) {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }

  const { query } = context;
  const { shopId: currentShopId }: { shopId?: string } = query;

  const userId = jwtDecode<{ userId: string }>(token).userId ?? '';
  const { data: userData } = await UserService.getUser(userId);
  const shopId = userData?.item?.shop?.item?.id ?? '';
  const userType = userData?.item?.type ?? '';

  // shopId와 currentShopId가 다르면 /shop 페이지로 리다이렉트
  if (shopId !== currentShopId) {
    return {
      redirect: {
        destination: pageList.shop(),
        permanent: false
      }
    };
  }

  // employer가 아니면 홈페이지로 리다이렉트
  if (userType !== 'employer') {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }

  const { data: shopData } = await ShopService.getShop(shopId);
  const { data: noticeListData } = await NoticeService.getNoticeListByShopId(shopId, { limit: defaultLimit });

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
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>내 가게</h1>
        <ShopArticle shopData={shopData} />
      </section>
      <section className={styles.sectionBottom}>
        <h1 className={styles.title}>{noticeListData.items?.length === 0 ? '' : '내가 '}등록한 공고</h1>
        <AsyncBoundary>
          <NoticeListArticle shopData={shopData} noticeListData={noticeListData} />
        </AsyncBoundary>
      </section>
    </>
  );
}

ShopDetailPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
