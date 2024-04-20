import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import ko from 'date-fns/locale/ko';
import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import styles from '@/components/common/Input/DateTimeForm.module.scss';
import GlobalStyle from '@/components/common/Input/DateTimeForm.styles';

registerLocale('ko', ko); // 한국어 로케일

interface DateTimeFormProps {
  className?: string;
  value: Date;
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
}

export default function DateTimeForm({ className, value, onChange }: DateTimeFormProps) {
  const datePickerClass = classNames(styles.datePicker, className);

  return (
    <div className={datePickerClass}>
      <GlobalStyle />
      <DatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="시간"
        dateFormat="yyyy-MM-dd HH:mm"
        locale="ko"
      />
    </div>
  );
}
