import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/Input/Label.module.scss';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  required?: boolean;
}

export default function Label({ className = '', children, htmlFor, required = false }: LabelProps) {
  if (!children) return null;

  const labelClasses = classNames(styles.defaultLabel, required && styles.required, className);

  return (
    <label className={labelClasses} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
