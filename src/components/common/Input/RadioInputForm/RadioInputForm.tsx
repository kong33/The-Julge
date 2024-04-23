import classNames from 'classnames';
import React, { forwardRef } from 'react';

import Input from '@/components/common/Input/Input';
import InputContainer from '@/components/common/Input/InputContainer';
import styles from '@/components/common/Input/RadioInputForm/RadioInputForm.module.scss';

interface RadioInputFormProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  label?: string;
  errorMessage?: string | undefined | null;
}

const RadioInputForm = forwardRef<HTMLInputElement | HTMLTextAreaElement, RadioInputFormProps>(
  ({ className = '', label = '', errorMessage = '', required = false, ...rest }: RadioInputFormProps, ref) => {
    const { ...restProps } = rest;

    const classes = {
      inputFieldContainer: classNames(styles.RadioInputFieldContainer)
    };

    return (
      <InputContainer className={className} label={label} required={required} errorMessage={errorMessage}>
        <div className={classes.inputFieldContainer}>
          <Input
            id={label}
            invalid={!!errorMessage}
            ref={ref as React.Ref<HTMLInputElement>}
            type="radio"
            {...restProps}
          />
        </div>
      </InputContainer>
    );
  }
);

export default RadioInputForm;
