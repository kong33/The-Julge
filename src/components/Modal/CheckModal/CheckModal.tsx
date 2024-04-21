import React from 'react';

import styles from '@/components/Modal/CheckModal/CheckModal.module.scss';
import { childrenProps } from '@/components/Modal/Modal.type';
import { useModal } from '@/components/Modal/ModalGroup';
import Button from '@/components/common/Button';

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
