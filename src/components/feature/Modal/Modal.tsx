import React from 'react';

import CheckModal from '@/components/feature/Modal/CheckModal/CheckModal';
import ErrorModal from '@/components/feature/Modal/ErrorModal/ErrorModal';
import styles from '@/components/feature/Modal/Modal.module.scss';
import { defaultProps, selectProps } from '@/components/feature/Modal/Modal.type';
import SelectModal from '@/components/feature/Modal/SelectModal/SelectModal';

/**
 * Modal 컴포넌트
 * @param children 모달에 나타나는 메세지; string
 * @param types 모달 타입; error | check | select
 * @param buttonClick 모달 내부의 button 클릭시 이벤트 ; () => void
 */
function ErrorContent({ children, onClick }: defaultProps) {
  return (
    <div className={styles.smallModal}>
      <ErrorModal onClick={onClick}>{children}</ErrorModal>
    </div>
  );
}

function CheckContent({ children, onClick }: defaultProps) {
  return (
    <div className={styles.largeModal}>
      <CheckModal onClick={onClick}>{children}</CheckModal>
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
  Select: SelectContent
};

export default Modal;
