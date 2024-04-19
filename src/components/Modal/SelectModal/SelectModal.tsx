import Image from 'next/image';
import React from 'react';

import styles from '@/components/Modal/SelectModal/SelectModal.module.scss';
import Button from '@/components/common/Button';

import { useModal } from '../ModalGroup';

type SelectModalProps = {
  children: React.ReactNode;
  buttonType?: 'user' | 'ceo';
  buttonClick: () => void;
};
function SelectModal({ buttonType, buttonClick, children }: SelectModalProps) {
  const { close } = useModal();
  return (
    <div className={styles.contents}>
      <div className={styles.txtBox}>
        <Image src="/svgs/modalcheck.svg" alt="check" width={24} height={24} />
        <p>{children}</p>
      </div>
      <div className={styles.btBox}>
        {buttonType === 'user' ? (
          <>
            <Button size="medium" active onClick={close}>
              아니오
            </Button>
            <Button solid size="medium" active onClick={buttonClick}>
              취소하기
            </Button>
          </>
        ) : (
          <>
            <Button size="medium" active onClick={close}>
              아니오
            </Button>
            <Button solid size="medium" active onClick={buttonClick}>
              거절하기
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default SelectModal;
