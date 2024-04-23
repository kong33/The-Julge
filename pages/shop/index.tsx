import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';
import React from 'react';

import { useGetUser } from '@/apis/user/useUserService';
import Button from '@/components/common/Button';
import MainLayout from '@/layouts/MainLayout';
import { pageList } from '@/libs/constants';
import styles from '@/pages/shop/index.module.scss';

// 토큰; 나중에 쿠키로 대체
let token: string = '';
let userId: string = '';
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token') ?? '';
  if (token) userId = jwtDecode<{ userId: string }>(token).userId ?? '';
}

// (shopId X) 사장님 가게 상세
export default function ShopPage() {
  const router = useRouter();

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  // 쿠키로 대체되면 tpyeof window === 'undefined' 제거
  if (typeof window !== 'undefined') {
    if (!token) {
      router.replace(pageList.login());
    }
  }

  // shopId가 있으면 /shop/[shopId] 페이지로 리다이렉트
  const { data } = useGetUser(userId);
  const shopId = data?.item?.shop?.item?.id ?? '';
  if (shopId) {
    router.replace(pageList.shopDetail(shopId));
  }

  const handleClick = {
    toShopRegisterPage: () => router.push(pageList.shopRegister())
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>내 가게</h1>
      <article className={styles.article}>
        <p className={styles.description}>내 가게를 소개하고 공고도 등록해 보세요.</p>
        <Button className={styles.button} onClick={handleClick.toShopRegisterPage} size="medium" active solid>
          가게 등록하기
        </Button>
      </article>
    </section>
  );
}

ShopPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
