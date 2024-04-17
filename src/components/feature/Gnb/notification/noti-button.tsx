import Image from 'next/image';

import styles from './noti-button.module.scss';

export default function NotiButton() {
  return (
    <button type="button" className={styles.button}>
      <Image src="/images/notification-inactive.svg" alt="notification" width={20} height={20} />
    </button>
  );
}
