import classNames from 'classnames';
import React, { useState } from 'react';

import styles from '@/components/common/Input/Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  invalid?: boolean;
}

// 숫자에 콤마를 추가하는 함수
const formatNumber = (value: string) => {
  // 숫자 이외의 문자 제거, 선행하는 0 제거, 단 숫자가 0이거나 비어 있지 않은 경우를 제외
  const cleanNum = value.replace(/\D/g, '').replace(/^0+/, '') || '0';
  // 세 자리마다 콤마를 추가
  return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', invalid = false, type, ...rest }: InputProps, ref) => {
    const inputClasses = classNames(styles.defaultInput, invalid && styles.invalid, className);

    const [numValue, setNumValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const formattedNumber = formatNumber(value);
      setNumValue(formattedNumber);
    };

    if (type === 'number') {
      return (
        <input className={inputClasses} ref={ref} type="text" value={numValue} onChange={handleChange} {...rest} />
      );
    }

    return <input className={inputClasses} ref={ref} {...rest} />;
  }
);

export default Input;
