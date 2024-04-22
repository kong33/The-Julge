import Image from 'next/image';
import { useState } from 'react';

import styles from '@/components/feature/Gnb/Notification/Notification.module.scss';

type NotiButtonProps = {
  NotiStatus: boolean;
};
/**
 * 활성 및 비활성 상태 사이를 전환할 수 있는 알림 버튼을 렌더링
 * 버튼을 클릭하면 현재 상태에 따라 모달 창 표시
 *
 * @param {boolean} props.NotiStatus - 알림이 활성 상태 여부
 * true일 경우 '활성' 이미지를 표시하고, 그렇지 않으면 '비활성' 이미지.
 */
export default function NotiButton({ NotiStatus }: NotiButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * 모달의 표시 여부를 토글합니다.
   */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <button type="button" className={styles.button} onClick={toggleModal}>
      <Image
        src={NotiStatus ? '/svgs/notification-active.svg' : '/svgs/notification-inactive.svg'}
        alt="알림"
        width={20}
        height={20}
      />
    </button>
  );
}
