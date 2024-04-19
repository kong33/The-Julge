import Image from 'next/image';
import React from 'react';

import styles from '@/components/Modal/ErrorModal/ErrorModal.module.scss';
import Button from '@/components/common/Button';

import { useModal } from '../ModalGroup';

function ErrorModal({ children }: { children: React.ReactNode }) {
  const { close } = useModal();
  return (
    <div className={styles.contents}>
      <div className={styles.txtBox}>
        <Image src="/svgs/warning.svg" alt="check" width={24} height={24} />
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
