import React from 'react';

import styles from '@/components/Modal/ErrorModal/ErrorModal.module.scss';
import { childrenProps } from '@/components/Modal/Modal.type';
import { useModal } from '@/components/Modal/ModalGroup';
import Button from '@/components/common/Button';
import { ReactComponent as Warning } from '@/public/svgs/warning.svg';

function ErrorModal({ children }: childrenProps) {
  const { close } = useModal();
  return (
    <div className={styles.contents}>
      <div className={styles.txtBox}>
        <Warning />
        <p>{children}</p>
      </div>
      <div className={styles.btBox}>
        <Button size="medium" active onClick={close}>
          확인
        </Button>
      </div>
    </div>
  );
}

export default ErrorModal;
