import React from 'react';

import MainLayout from '@/layouts/MainLayout';

import styles from './index.module.scss';

export default function UserEditPage() {
  return (
    <div className={styles.container}>
      <h1>유저 등록 페이지</h1>
    </div>
  );
}

UserEditPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
