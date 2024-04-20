import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import ko from 'date-fns/locale/ko';
import React, { forwardRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import styles from '@/components/common/Input/DateTimeForm.module.scss';
import GlobalStyle from '@/components/common/Input/DateTimeForm.styles';

registerLocale('ko', ko); // 한국어 로케일

interface DateTimeFormProps {
  className?: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
  onBlur?: () => void;
}

/**
 * 날짜, 시간을 입력하는 컴포넌트입니다. react-datepicker를 사용합니다.
 * react-hook-form의 Controller에 대응됩니다.
 * @param className string; InputForm 커스텀 스타일; 컨테이너의 스타일을 주입할 수 있습니다.
 * @param value string; input의 value; ISO8601 형식; dateStr = new Date().toISOString();
 * @param onChange (date: Date) => void;
 * @returns
 */
const DateTimeForm = forwardRef(({ className, value, onChange, onBlur }: DateTimeFormProps, ref) => {
  const datePickerClass = classNames(styles.datePicker, className);

  return (
    <div className={datePickerClass}>
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
    </div>
  );
});

export default DateTimeForm;
