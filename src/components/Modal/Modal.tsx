import React from 'react';

import CheckModal from '@/components/Modal/CheckModal/CheckModal';
import ErrorModal from '@/components/Modal/ErrorModal/ErrorModal';
import styles from '@/components/Modal/Modal.module.scss';
import { childrenProps, selectProps } from '@/components/Modal/Modal.type';
import SelectModal from '@/components/Modal/SelectModal/SelectModal';

/**
 * Modal 컴포넌트
 * @param children 모달에 나타나는 메세지; string
 * @param types 모달 타입; error | check | select
 * @param buttonClick 모달 내부의 button 클릭시 이벤트 ; () => void
 */
function ErrorContent({ children }: childrenProps) {
  return (
    <div className={styles.smallModal}>
      <ErrorModal>{children}</ErrorModal>
    </div>
  );
}

function CheckContent({ children }: childrenProps) {
  return (
    <div className={styles.largeModal}>
      <CheckModal>{children}</CheckModal>
    </div>
  );
}

function SelectContent({ children, buttonClick }: selectProps) {
  return (
    <div className={styles.smallModal}>
      <SelectModal buttonClick={buttonClick}>{children}</SelectModal>
    </div>
  );
}

const Modal = {
  Error: ErrorContent,
  Check: CheckContent,
  Select: SelectContent,
};

export default Modal;
