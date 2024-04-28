import React from 'react';

import Button from '@/components/common/Button/Button';
import styles from '@/components/feature/Modal/ErrorModal/ErrorModal.module.scss';
import { defaultProps } from '@/components/feature/Modal/Modal.type';
import { useModal } from '@/components/feature/Modal/ModalGroup';
import { ReactComponent as Warning } from '@/public/svgs/warning.svg';

function ErrorModal({ children, onClick }: defaultProps) {
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
        <Warning />
        <p>{children}</p>
      </div>
      <div className={styles.btBox}>
        <Button size="medium" active onClick={handleClick}>
          확인
        </Button>
      </div>
    </div>
  );
}

export default ErrorModal;
