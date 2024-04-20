import React from 'react';

import CheckModal from '@/components/Modal/CheckModal/CheckModal';
import ErrorModal from '@/components/Modal/ErrorModal/ErrorModal';
import styles from '@/components/Modal/Modal.module.scss';
import SelectModal from '@/components/Modal/SelectModal/SelectModal';

/**
 * Modal 컴포넌트
 * @param children 모달에 나타나는 메세지; string
 * @param types 모달 타입; error | check | select
 * @param buttonClick 모달 내부의 button 클릭시 이벤트 ; () => void
 */
type errorProps = {
  children: React.ReactNode;
};
function ErrorContent({ children }: errorProps) {
  return (
    <div className={styles.smallModal}>
      <ErrorModal>{children}</ErrorModal>
    </div>
  );
}

type checkProps = {
  children: React.ReactNode;
};
function CheckContent({ children }: checkProps) {
  return (
    <div className={styles.largeModal}>
      <CheckModal>{children}</CheckModal>
    </div>
  );
}

type selectProps = {
  children: React.ReactNode;
  buttonClick: () => void;
};
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
