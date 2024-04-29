import React from 'react';

import EmployerNotice from '@/components/Employer/EmployerNotice/EmployerNotice';
import AsyncBoundary from '@/components/common/AsyncBoundary/AsyncBoundary';
import ShopDescriptionArticle from '@/components/feature/CommonShopDescription/ShopDescriptionArticle';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/shop/[shopId]/[noticeId]/index.module.scss';

function shopNoticeDetail() {
  return (
    <div>
      <div className={styles.top}>
        <AsyncBoundary>
          <ShopDescriptionArticle />
        </AsyncBoundary>
      </div>
      <div className={styles.bottom}>
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
