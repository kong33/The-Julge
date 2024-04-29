import Head from 'next/head';
import React from 'react';

import styles from '@/layouts/layout.module.scss';

// 로그인, 회원가입에 사용될 헤더 푸터가 없는 레이아웃
function EmptyLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      <Head>
        <title>The-Julge</title>
      </Head>
      <main className={styles.emptyLayout}>{children}</main>
    </>
  );
}

export default EmptyLayout;
