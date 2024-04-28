import React from 'react';

import Button from '@/components/common/Button/Button';

import styles from './ApplyDetail.module.scss';

type Applications = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

type NoticeListData = {
  ApplicationData: Applications[];
  onClickList: () => void;
};

function ApplyDetail({ ApplicationData, onClickList }: NoticeListData) {
  return (
    <div className={styles.container}>
      {ApplicationData.length === 0 ? (
        <div className={styles.wrapper}>
          <div className={styles.applycationEmpty}>아직 신청 내역이 없어요.</div>
          <Button className={styles.applycationButton} solid size="large" active onClick={onClickList}>
            공고 보러가기
          </Button>
        </div>
      ) : (
        <div> 테이블들</div>
      )}
    </div>
  );
}

export default ApplyDetail;
