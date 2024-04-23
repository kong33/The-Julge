import router from 'next/router';
import React from 'react';

import Button from '@/components/common/Button';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/shop/index.module.scss';

const pageList = {
  shareRegister: '/shop/register'
};

// (shopId X) 사장님 가게 상세
export default function ShopPage() {
  const handleClick = {
    toShopRegisterPage: () => router.push(pageList.shareRegister)
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
