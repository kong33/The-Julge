import Head from 'next/head';
import React from 'react';

// 로그인, 회원가입에 사용될 헤더 푸터가 없는 레이아웃
function EmptyLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      <Head>
        <title>The-Julge</title>
      </Head>
      {children}
    </>
  );
}

export default EmptyLayout;
