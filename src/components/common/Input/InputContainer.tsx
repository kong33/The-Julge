import classNames from 'classnames';
import React from 'react';

import ErrorMessage from '@/components/common/Input/ErrorMessage';
import styles from '@/components/common/Input/InputContainer.module.scss';
import Label from '@/components/common/Input/Label';

export interface InputContainerProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  required?: boolean;
  errorMessage?: string | undefined | null;
}

export default function InputContainer({
  className = '',
  label = '',
  required = false,
  errorMessage = '',
  children
}: InputContainerProps) {
  const inputFormContainer = classNames(styles.inputFormContainer, className);

  return (
    <div className={inputFormContainer}>
      <Label required={required}>{label}</Label>
      {children}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
}
