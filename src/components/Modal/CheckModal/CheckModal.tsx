import React from 'react';

import styles from '@/components/Modal/CheckModal/CheckModal.module.scss';
import Button from '@/components/common/Button';

import { useModal } from '../ModalGroup';

function CheckModal({ children }: { children: React.ReactNode }) {
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
