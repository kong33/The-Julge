import Head from 'next/head';
import React from 'react';

import Gnb from '@/components/common/Gnb/Gnb';
import styles from '@/layouts/layout.module.scss';
// 헤더 푸터가 적용되어있는 레이아웃 (기본값)
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>The-Julge</title>
      </Head>
      <Gnb userType="employee" NotiStatus />
      <main className={styles.mainStyle}>{children}</main>
      {/* footer */}
    </>
  );
}
