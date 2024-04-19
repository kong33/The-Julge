import React from 'react';

import ErrorModal from '@/components/Modal/ErrorModal/ErrorModal';
import styles from '@/components/Modal/Modal.module.scss';
// import Button from '@/components/common/Button';

type ModalProps = {
  errorMessage: string;
  types: 'error' | 'check' | 'select';
};
function Modal({ errorMessage, types }: ModalProps) {
  switch (types) {
    case 'error':
      return (
        <div className={styles.modalWrap}>
          <ErrorModal errorMessage={errorMessage} />
        </div>
      );
    // case 'check':
    //   return <CheckModal errorMessage={errorMessage} />;
    // case 'select':
    //   return <SelectModal errorMessage={errorMessage} />;
    default:
      throw new Error(`Unsupported modal type: ${types}`);
  }
}

export default Modal;

// <div className={`${styles.types}`}>
//   <p>{errorMessage}</p>
//   <Button active="true" size={'small'} active={false}>
//     확인
//   </Button>
// </div>
