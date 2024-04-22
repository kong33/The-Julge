import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/Input/ErrorMessage.module.scss';

interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export default function ErrorMessage({ className, children }: ErrorMessageProps) {
  if (!children) return null;

  const errorMessageClasses = classNames(styles.errorMessage, className);

  return <p className={errorMessageClasses}>{children}</p>;
}
