/* eslint-disable no-underscore-dangle */
import classNames from 'classnames';
import React, { useState, forwardRef } from 'react';

import Input from '@/components/common/Input/Input';
import styles from '@/components/common/Input/RadioInputForm/RadioInputForm.module.scss';
import { ReactComponent as RadioButtonUnChecked } from '@/public/svgs/buttonUnCheck.svg';
import { ReactComponent as Radiobutton } from '@/public/svgs/radioCheck.svg';

interface RadioInputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorMessage?: string | undefined | null;
  labels?: string[];
  register?: React.Ref<HTMLInputElement>;
}

const RadioInputForm = forwardRef<HTMLInputElement, RadioInputFormProps>(
  ({ className = '', errorMessage = '', labels = ['', ''], register, ...rest }: RadioInputFormProps, ref) => {
    const { ...restProps } = rest;
    const [isClicked, setIsClicked] = useState<boolean[]>([false, false]);
    const classes = {
      formWrapper: classNames(styles.formWrapper),
      container: classNames(styles.container),
      inputFieldContainer: classNames(styles.RadioInputFieldContainer),
      inputComponent: classNames(styles.input, styles[className]),
      label: classNames(styles.labelWrapper),
      fieldsetLabel: classNames(styles.fieldsetLabel),
      radioInput: classNames(styles.radioInput)
    };
    const handleEmployerClick = () => {
      setIsClicked([true, false]);
    };
    const handleEmployeeClick = () => {
      setIsClicked([false, true]);
    };
    return (
      <fieldset className={classes.formWrapper}>
        <legend className={classes.fieldsetLabel}>회원 유형</legend>
        <section className={classes.container}>
          <label
            htmlFor="employer"
            className={classes.label}
            onClick={handleEmployerClick}
            onKeyDown={handleEmployerClick}
            role="presentation"
          >
            <Input
              invalid={!!errorMessage}
              ref={register || ref}
              type="radio"
              className={classes.radioInput}
              {...restProps}
              id="employer"
              value="employer"
              required
            />
            {isClicked[0] ? <Radiobutton /> : <RadioButtonUnChecked />}
            {labels[0]}
          </label>

          <label
            htmlFor="employee"
            className={classes.label}
            onClick={handleEmployeeClick}
            onKeyDown={handleEmployeeClick}
            role="presentation"
          >
            <Input
              invalid={!!errorMessage}
              ref={register || ref}
              type="radio"
              className={classes.radioInput}
              {...restProps}
              id="employee"
              value="employee"
            />
            {isClicked[1] ? <Radiobutton /> : <RadioButtonUnChecked />}
            {labels[1]}
          </label>
        </section>
      </fieldset>
    );
  }
);

export default RadioInputForm;
