import React from 'react';

import EmployerNotice from '@/components/Employer/EmployerNotice/EmployerNotice';
import AsyncBoundary from '@/components/common/AsyncBoundary';
import ShopDescriptionArticle from '@/components/feature/CommonShopDescription/ShopDescriptionArticle';
import MainLayout from '@/layouts/MainLayout';

function shopNoticeDetail() {
  return (
    <div>
      <div>
        <AsyncBoundary>
          <ShopDescriptionArticle />
        </AsyncBoundary>
      </div>
      <div>
        <AsyncBoundary>
          <EmployerNotice />
        </AsyncBoundary>
      </div>
    </div>
  );
}

export default shopNoticeDetail;

shopNoticeDetail.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
