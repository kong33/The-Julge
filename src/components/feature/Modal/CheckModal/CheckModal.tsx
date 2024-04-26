import React from 'react';

import Button from '@/components/common/Button';
import styles from '@/components/feature/Modal/CheckModal/CheckModal.module.scss';
import { defaultProps } from '@/components/feature/Modal/Modal.type';
import { useModal } from '@/components/feature/Modal/ModalGroup';

function CheckModal({ children, onClick }: defaultProps) {
  const { close } = useModal();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    close();
  };

  return (
    <div className={styles.contents}>
      <div className={styles.txtBox}>
        <p>{children}</p>
      </div>
      <div className={styles.btBox}>
        <Button solid size="large" active onClick={handleClick} className={styles.modalBt}>
          확인
        </Button>
      </div>
    </div>
  );
}

export default CheckModal;
