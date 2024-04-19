import classNames from 'classnames';
import React, { ForwardedRef, useState } from 'react';

import styles from '@/components/common/Input/Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  invalid?: boolean;
  textarea?: boolean;
  rows?: number;
  // eslint-disable-next-line no-unused-vars
  formatter?: (value: string) => string;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className = '', invalid = false, textarea = false, formatter, ...rest }: InputProps, ref) => {
    const inputClasses = classNames(styles.defaultInput, invalid && styles.invalid, className);

    const [numValue, setNumValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (formatter) {
        const { value } = e.target;
        const formattedNumber = formatter(value);
        setNumValue(formattedNumber);
      }
    };

    if (textarea) {
      return <textarea className={inputClasses} ref={ref as ForwardedRef<HTMLTextAreaElement>} {...rest} />;
    }

    if (formatter) {
      return (
        <input
          className={inputClasses}
          ref={ref as ForwardedRef<HTMLInputElement>}
          type="text"
          value={numValue}
          onChange={handleChange}
          {...rest}
        />
      );
    }

    return <input className={inputClasses} ref={ref as ForwardedRef<HTMLInputElement>} {...rest} />;
  }
);

export default Input;
