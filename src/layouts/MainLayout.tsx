import React from 'react';

import Gnb from '@/components/common/Gnb';

// 헤더 푸터가 적용되어있는 레이아웃 (기본값)
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Gnb userType="employee" NotiStatus />
      <main>{children}</main>
      {/* footer */}
    </>
  );
}
