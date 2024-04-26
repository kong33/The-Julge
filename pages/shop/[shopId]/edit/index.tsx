import React from 'react';

import MainLayout from '@/layouts/MainLayout';

// (shopId O) 사장님 가게 편집
export default function ShopEditPage() {
  return <div>/shop/edit</div>;
}

ShopEditPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
