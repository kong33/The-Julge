import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/Input/Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', invalid = false, ...rest }: InputProps, ref) => {
    // const {  } = props;

    const inputClasses = classNames(styles.defaultInput, invalid && styles.invalid, className);

    return <input className={inputClasses} ref={ref} {...rest} />;
  }
);

export default Input;
