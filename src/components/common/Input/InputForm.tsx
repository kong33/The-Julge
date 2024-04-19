import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Input from '@/components/common/Input/Input';
import styles from '@/components/common/Input/InputForm.module.scss';

import Label from './Label';

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
  // fieldLabel 너비 지정
  const [inputFieldPaddingRight, setInputFieldPaddingRight] = useState('2rem');
  const fieldLabelRef = useRef<HTMLSpanElement>(null);

  const classes = {
    inputFormContainer: classNames(styles.inputFormContainer, className),

    inputFieldContainer: classNames(styles.inputFieldContainer),
    inputField: classNames(fieldLabel && `paddingRight: ${inputFieldPaddingRight}`),
  };

  useEffect(() => {
    // fieldLabel 크기만큼 여백 지정
    const fieldLabelWidth = fieldLabelRef.current?.offsetWidth ?? 0;
    setInputFieldPaddingRight(`${fieldLabelWidth / 10 + 2}rem`);
  }, [fieldLabel]);

  return (
    <div className={classes.inputFormContainer}>
      <Label htmlFor={label} required={required}>
        {label}
      </Label>
      <div className={classes.inputFieldContainer}>
        <Input
          style={{ paddingRight: inputFieldPaddingRight }}
          id={label}
          invalid={!!errorMessage}
          {...register}
          {...rest}
        />
        {fieldLabel && (
          <span className={styles.fieldLabel} ref={fieldLabelRef}>
            {fieldLabel}
          </span>
        )}
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
