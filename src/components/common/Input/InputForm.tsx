import classNames from 'classnames';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Input from '@/components/common/Input/Input';
import styles from '@/components/common/Input/InputForm.module.scss';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  fieldLabel?: string;
  errorMessage?: string | undefined | null;
  register?: UseFormRegisterReturn;
}

/**
 * react-hook-form과 호환되는 InputForm 컴포넌트입니다.
 * label, input, errorMessage가 포함되어있습니다.
 * @param className InputForm 커스텀 스타일; 컨테이너의 스타일을 주입할 수 있습니다.
 * @param label label
 * @param fieldLabel input 맨 뒤에 고정된 문자열; ex) '원'
 * @param errorMessage 에러 메세지; react-hook-form의 errors.{form}.message에 대응됩니다.
 * @param register react-hook-form의 register('form', validator)와 대응됩니다.
 * @param required label 끝에 '*' 문자를 추가합니다.
 * @param rest 기타 input의 모든 속성을 지원합니다.
 * @returns
 */

export default function InputForm({
  className = '',
  label = '',
  fieldLabel = '',
  errorMessage = '',
  register,
  required = false,
  ...rest
}: InputFormProps) {
  const inputFormContainerClasses = classNames(styles.inputFormContainer, className);
  const inputFormLabelContainerClasses = classNames(styles.inputFormLabel, required && styles.required);
  const inputFieldContainerClasses = classNames(styles.inputFieldContainer);
  const inputFieldClasses = classNames(fieldLabel && styles.fieldLabelPadding);

  return (
    <div className={inputFormContainerClasses}>
      {label && (
        <label className={inputFormLabelContainerClasses} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={inputFieldContainerClasses}>
        <Input className={inputFieldClasses} id={label} invalid={!!errorMessage} {...register} {...rest} />
        {fieldLabel && <span className={styles.fieldLabel}>{fieldLabel}</span>}
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
