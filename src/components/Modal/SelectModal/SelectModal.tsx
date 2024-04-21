import React from 'react';

import { SelectModalProps } from '@/components/Modal/Modal.type';
import { useModal } from '@/components/Modal/ModalGroup';
import styles from '@/components/Modal/SelectModal/SelectModal.module.scss';
import Button from '@/components/common/Button';
import { ReactComponent as Check } from '@/public/svgs/modalcheck.svg';

function SelectModal({ buttonClick, children }: SelectModalProps) {
  const { close } = useModal();
  return (
    <div className={styles.contents}>
      <div className={styles.txtBox}>
        <Check />
        <p>{children}</p>
      </div>
      <div className={styles.btBox}>
        <Button size="medium" active onClick={buttonClick}>
          예
        </Button>
        <Button solid size="medium" active onClick={close}>
          아니오
        </Button>
      </div>
    </div>
  );
}

export default SelectModal;
