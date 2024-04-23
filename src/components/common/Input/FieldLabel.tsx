import classNames from 'classnames';
import React from 'react';

import styles from '@/components/common/Input/FieldLabel.module.scss';

interface FieldLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const FieldLabel = React.forwardRef<HTMLSpanElement, FieldLabelProps>(
  ({ className = '', children }: FieldLabelProps, ref) => {
    if (!children) return null;

    const fieldLabelClasses = classNames(styles.fieldLabel, className);

    return (
      <span className={fieldLabelClasses} ref={ref}>
        {children}
      </span>
    );
  }
);

export default FieldLabel;
