import React from 'react';

import Button from '@/components/common/Button';

import styles from './ApplyDetail.module.scss';

type Notice = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
};

type NoticeListData = {
  notices: Notice[];
  onClickList: () => void;
};

function ApplyDetail({ notices, onClickList }: NoticeListData) {
  return (
    <div className={styles.noticeList}>
      {notices.length === 0 ? <div className={styles.noticeEmpty}>아직 신청 내역이 없어요.</div> : <div> 테이블들</div>}
      <Button className={styles.listButton} solid size="large" active onClick={onClickList}>
        공고 보러가기
      </Button>
    </div>
  );
}

export default ApplyDetail;
