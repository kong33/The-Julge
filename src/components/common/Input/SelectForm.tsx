/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import Select, { components } from 'react-select';

import styles from '@/components/common/Input/SelectForm.module.scss';
import { ReactComponent as DropdownSvg } from '@/public/svgs/dropdown.svg';

type IFormInput = {
  selection: { label: string; value: string };
};

interface SelectFormProps extends React.ComponentProps<typeof Select> {
  className?: string;
  size?: 'large' | 'small';
  instanceId: string;
  optionList: string[];
  field: ControllerRenderProps<IFormInput, 'selection'>;
}

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: '1.6rem 2rem',
    borderRadius: '0.6rem',
    border: '0.1rem solid #CBC9CF',
    boxShadow: 'none',
    background: '#FFF',
    '&:hover': {},
    '&:focus': {},
    '&:active': {},
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '2.6rem',
    color: '#111322',
  }),
  menu: (provided: any) => ({
    ...provided,
    marginTop: '0.8rem',
    textAlign: 'center',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '1.4rem',
    fontWeight: '400',
    lineHeight: '2.2rem',
    color: '#111322',
    borderRadius: '0.6rem',
    border: '0.1rem solid #E5E4E7',
    boxShadow: '0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.10)',
  }),
  menuList: (provided: any) => ({
    ...provided,
    // 스크롤바
    '::-webkit-scrollbar': {
      width: '1.2rem',
    },
    // 스크롤바 핸들
    '::-webkit-scrollbar-thumb': {
      cursor: 'default',
      background: '#7d7986',
      borderRadius: '9999rem',
      backgroundClip: 'padding-box',
      border: '0.4rem solid transparent',
    },
  }),
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    padding: '1.2rem 0',
    background: state.isSelected ? '#e5e4e7' : 'none',
    color: '#111322',
    borderBottom: '0.1rem solid #f2f2f3',
    '&:last-of-type': {
      borderBottom: 'none',
    },
    '&:hover': { background: !state.isSelected && '#f2f2f3' },
    '&:active': { background: '#e5e4e7' },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '2.6rem',
    color: '#A4A1AA',
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided: any) => ({
    ...provided,
  }),
  input: (provided: any) => ({
    ...provided,
  }),
};

const selectSmallStyle = {
  ...selectStyles,
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    padding: '0.8rem 0',
    background: state.isSelected ? '#e5e4e7' : 'none',
    color: '#111322',
    borderBottom: '0.1rem solid #f2f2f3',
    '&:first-of-type': {
      paddingTop: '1.2rem',
    },
    '&:last-of-type': {
      borderBottom: 'none',
      paddingBottom: '1.2rem',
    },
    '&:hover': { background: !state.isSelected && '#f2f2f3' },
    '&:active': { background: '#e5e4e7' },
  }),
};

function DropdownIndicator(props: any) {
  const { selectProps } = props;
  const { menuIsOpen } = selectProps;
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <DropdownSvg transform={menuIsOpen ? 'rotate(180)' : ''} />
      </components.DropdownIndicator>
    )
  );
}

export default function SelectForm({
  className = '',
  size = 'large',
  instanceId,
  optionList,
  field,
  ...rest
}: SelectFormProps) {
  const selectOptionList = optionList.map((option) => ({ value: option, label: option }));

  const selectFormClasses = classNames(styles.selectForm, className);

  return (
    <Select
      className={selectFormClasses}
      {...field}
      instanceId={instanceId}
      options={selectOptionList}
      styles={size === 'small' ? selectSmallStyle : selectStyles}
      components={{ DropdownIndicator }}
      onChange={(value) => field.onChange(value)}
      isSearchable={false}
      {...rest}
    />
  );
}
