import Head from 'next/head';
import React from 'react';

import Gnb from '@/components/common/Gnb';

function HeadLayout() {
  return (
    <>
      <Head>
        <title>The-Julge</title>
      </Head>
      <Gnb userType="employee" NotiStatus />
    </>
  );
}

export default HeadLayout;
