import React from 'react';

import MainLayout from '@/layouts/MainLayout';

// (shopId X) 사장님 가게 등록
export default function ShopRegisterPage() {
  // 시작
  return <div>/shop/register</div>;
}

ShopRegisterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
