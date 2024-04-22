import React from 'react';

import Button from '@/components/common/Button';
import styles from '@/components/feature/Modal/CheckModal/CheckModal.module.scss';
import { childrenProps } from '@/components/feature/Modal/Modal.type';
import { useModal } from '@/components/feature/Modal/ModalGroup';

function CheckModal({ children }: childrenProps) {
  const { close } = useModal();
  return (
    <div className={styles.contents}>
      <div className={styles.txtBox}>
        <p>{children}</p>
      </div>
      <div className={styles.btBox}>
        <Button solid size="large" active onClick={close} className={styles.modalBt}>
          확인
        </Button>
      </div>
    </div>
  );
}

export default CheckModal;
