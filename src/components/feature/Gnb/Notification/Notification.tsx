import Image from 'next/image';
import React, { forwardRef } from 'react';

import styles from '@/components/feature/Gnb/Notification/Notification.module.scss';

type NotiButtonProps = {
  NotiStatus: boolean;
  onClick: () => void;
};

const NotiButton = forwardRef<HTMLButtonElement, NotiButtonProps>(({ NotiStatus, onClick }, ref) => {
  return (
    <button ref={ref} type="button" className={styles.button} onClick={onClick}>
      <Image
        src={NotiStatus ? '/svgs/notification-active.svg' : '/svgs/notification-inactive.svg'}
        alt="알림"
        width={500}
        height={300}
      />
    </button>
  );
});

export default NotiButton;
