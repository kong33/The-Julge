import { RefObject, useState } from 'react';

import styles from '@/components/feature/NotificationModal/NotificationModal.module.scss';
import { ReactComponent as Close } from '@/public/svgs/closeButton.svg';

import NotificationModalCard from './NotificationModalCard/NotificationModalCard';

type NotificationModalProps = {
  alertCount: number;
  alertList: {
    shop: string;
    result: string;
    createdAt: string;
    startsAt: string;
    workhour: number;
  }[];
  isModalShow: boolean;
  filterRef?: RefObject<HTMLDivElement>;
};

export default function NotificationModal({ alertCount, alertList, isModalShow, filterRef }: NotificationModalProps) {
  const [modalClose, setModlaClose] = useState(false);

  return (
    isModalShow &&
    !modalClose && (
      <section className={styles.container} ref={filterRef}>
        <div>
          <h1>알림 {alertCount}개</h1>
          <Close onClick={() => setModlaClose(true)} />
        </div>

        {alertList.map((item) => (
          <NotificationModalCard
            key={item.shop}
            shop={item.shop}
            result={item.result as 'accepted' | 'rejected'}
            createdAt={item.createdAt}
            startsAt={item.startsAt}
            workhour={item.workhour}
          />
        ))}
      </section>
    )
  );
}
