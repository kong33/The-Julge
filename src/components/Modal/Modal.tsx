import React from 'react';

import CheckModal from '@/components/Modal/CheckModal/CheckModal';
import ErrorModal from '@/components/Modal/ErrorModal/ErrorModal';
import styles from '@/components/Modal/Modal.module.scss';
import SelectModal from '@/components/Modal/SelectModal/SelectModal';

type ModalProps = {
  children: React.ReactNode;
  types: 'error' | 'check' | 'select';
  buttonType?: 'user' | 'ceo';
  buttonClick?: () => void;
};
/**
 * Modal 컴포넌트
 * @param children 모달에 나타나는 메세지; string
 * @param types 모달 타입; error | check | select
 * @param buttonType select 타입일 때 페이지 구분; ceo | user
 * @param buttonClick select 타입일 때 수락button 클릭시 이벤트 ; () => void
 */
function Modal({ children, types, buttonType, buttonClick }: ModalProps) {
  switch (types) {
    case 'error':
      if (buttonType && buttonClick) {
        throw new Error('error 타입의 모달에서는 butttonType,buttonClick이 없습니다.');
      }
      return (
        <div className={styles.smallModal}>
          <ErrorModal>{children}</ErrorModal>
        </div>
      );
    case 'check':
      if (buttonType && buttonClick) {
        throw new Error('check 타입의 모달에서는 butttonType,buttonClick이 없습니다.');
      }

      return (
        <div className={styles.largeModal}>
          <CheckModal>{children}</CheckModal>
        </div>
      );
    case 'select':
      if (!buttonType) {
        throw new Error('select 타입의 모달에서는 butttonType이 필수입니다.');
      }
      if (!buttonClick) {
        throw new Error('select 타입의 모달에서는 buttonClick 필수입니다.');
      }
      return (
        <div className={styles.smallModal}>
          <SelectModal buttonType={buttonType} buttonClick={buttonClick}>
            {children}
          </SelectModal>
        </div>
      );
    default:
      throw new Error(`Unsupported modal type: ${types}`);
  }
}

export default Modal;
