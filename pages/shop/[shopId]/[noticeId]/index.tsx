import { useRouter } from 'next/router';
import React from 'react';

import EmployerNotice from '@/components/Employer/EmployerNotice/EmployerNotice';
import AsyncBoundary from '@/components/common/AsyncBoundary/AsyncBoundary';
import ShopDescriptionArticle from '@/components/feature/CommonShopDescription/ShopDescriptionArticle';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/shop/[shopId]/[noticeId]/index.module.scss';

export const getServerSideProps = async () => {
  return { props: {} };
};

function ShopNoticeDetail() {
  const router = useRouter();
  const { shopId, noticeId } = router.query;
  return (
    <div>
      <div className={styles.top}>
        <AsyncBoundary>
          <ShopDescriptionArticle shopId={shopId as string} noticeId={noticeId as string} />
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

export default ShopNoticeDetail;

ShopNoticeDetail.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
