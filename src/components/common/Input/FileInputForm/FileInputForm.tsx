import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/components/common/Input/FileInputForm/FileInputForm.module.scss';
import InputContainer from '@/components/common/Input/InputContainer';
import { ReactComponent as CameraSvg } from '@/public/svgs/camera.svg';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  label?: string;
  errorMessage?: string | undefined | null;
  register?: UseFormRegisterReturn;
}

/**
 * react-hook-form과 호환되는 InputForm 컴포넌트입니다.
 * label, input, errorMessage가 포함되어있습니다.
 * @param className string; InputForm 커스텀 스타일; 컨테이너의 스타일을 주입할 수 있습니다.
 * @param label string; input과 연결된 label입니다.
 * @param fieldLabel string; input 맨 뒤에 고정된 문자열; ex) '원'
 * @param errorMessage string; 에러 메세지; react-hook-form의 errors.{form}.message에 대응됩니다.
 * @param type string; input의 타입; type=number의 경우 01234 -> 1,234 형태로 포맷팅됩니다. 금액/시간 등에는 number를 사용해주세요.
 * @param textarea boolean; textarea; input을 textarea로 변경합니다.
 * @param rows number; textarea의 줄 수; textarea의 높이를 지정합니다. 기본값=5
 * @param required boolean; label 끝에 '*' 문자를 추가합니다.
 * @param formatter function;input의 value를 포맷팅합니다.
 * @param rest 기타 input의 모든 속성을 지원합니다.
 * @returns
 */

const FileInputForm = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFormProps>(
  ({ className = '', label = '', errorMessage = '', required = false, ...rest }: InputFormProps, ref) => {
    return (
      <InputContainer className={className} label={label} required={required} errorMessage={errorMessage}>
        <div className={styles.inputFieldContainer}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={label} className={styles.fileInputLabel}>
            <CameraSvg className={styles.cameraIcon} />
            <p className={styles.placeholder}>이미지 추가하기</p>
          </label>
          <input
            className={styles.fileInput}
            id={label}
            type="file"
            accept="image/*"
            ref={ref as React.Ref<HTMLInputElement>}
            {...rest}
          />
        </div>
      </InputContainer>
    );
  }
);

export default FileInputForm;
