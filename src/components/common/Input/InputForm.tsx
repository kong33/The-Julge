import classNames from 'classnames';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Input from '@/components/common/Input/Input';
import styles from '@/components/common/Input/InputForm.module.scss';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  errorMessage?: string | undefined | null;
  register?: UseFormRegisterReturn;
}

/**
 * react-hook-form과 호환되는 InputForm 컴포넌트입니다.
 * label, input, errorMessage가 포함되어있습니다.
 * @param className InputForm 커스텀 스타일; 컨테이너의 스타일을 주입할 수 있습니다.
 * @param label label
 * @param errorMessage 에러 메세지; react-hook-form의 errors.{form}.message에 대응됩니다.
 * @param register react-hook-form의 register('form', validator)와 대응됩니다.
 * @param rest 기타 input의 모든 속성을 지원합니다.
 * @returns
 */

export default function InputForm({
  className = '',
  label = '',
  errorMessage = '',
  register,
  ...rest
}: InputFormProps) {
  const inputFormContainerClasses = classNames(styles.inputFormContainer, className);
  const inputFormLabelContainerClasses = classNames(styles.inputFormLabel, register?.required && styles.required);

  return (
    <div className={inputFormContainerClasses}>
      {label && (
        <label className={inputFormLabelContainerClasses} htmlFor={label}>
          {label}
        </label>
      )}
      <Input id={label} invalid={!!errorMessage} {...register} {...rest} />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
