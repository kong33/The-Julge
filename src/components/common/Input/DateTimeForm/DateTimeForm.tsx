import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import React, { forwardRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

// import styles from '@/components/common/Input/DateTimeForm.module.scss';
import GlobalStyle from '@/components/common/Input/DateTimeForm/DateTimeForm.styles';

import InputContainer, { InputContainerProps } from '../InputContainer';

registerLocale('ko', ko); // 한국어 로케일

interface DateTimeFormProps extends InputContainerProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
  onBlur?: () => void;
}

/**
 * react-datepicker를 이용한 날짜, 시간을 입력하는 컴포넌트입니다.
 * react-hook-form의 Controller에 대응됩니다.
 * @param className string; InputForm 커스텀 스타일; 컨테이너의 스타일을 주입할 수 있습니다.
 * @param value string; input의 value; ISO8601 형식; dateStr = new Date().toISOString();
 * @param onChange Controller의 onChange에 대응됩니다.
 * @param onBlur Controller의 onBlur에 대응됩니다.
 * @param label string; input과 연결된 label입니다.
 * @param required boolean; label 끝에 '*' 문자를 추가합니다.
 * @param errorMessage string; 에러 메세지; react-hook-form의 errors.{form}.message에 대응됩니다.
 */
const DateTimeForm = forwardRef(
  ({ className, value, onChange, onBlur, label = '', required = false, errorMessage = '' }: DateTimeFormProps, ref) => {
    return (
      <InputContainer className={className} label={label} required={required} errorMessage={errorMessage}>
        <GlobalStyle />
        <DatePicker
          selected={new Date(value)}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref as React.Ref<DatePicker>}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="시간"
          dateFormat="yyyy-MM-dd HH:mm"
          locale="ko"
        />
      </InputContainer>
    );
  }
);

export default DateTimeForm;
