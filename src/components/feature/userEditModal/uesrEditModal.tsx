import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Address } from '@/apis/common.type';
import UserService from '@/apis/user/User.service';
import { PutUserPayload } from '@/apis/user/user.type';
import Button from '@/components/common/Button';
import InputForm from '@/components/common/Input/InputForm/InputForm';
import SelectForm from '@/components/common/Input/SelectForm/SelectForm';
import { addressList } from '@/libs/constants/contants';
import { formatPhoneNumber } from '@/libs/utils/formatter';

import styles from './userEditModal.module.scss';
import { useModal } from '../Modal/ModalGroup';

const userId = 'f5d4efde-1fe0-4568-bdd8-a4d8af73bbbd';

type IFormInput = {
  name: string;
  phone: string;
  address: Address;
  bio: string;
};

const defaultValueList = {
  name: '',
  phone: '',
  address: addressList[0],
  bio: ''
};

interface UserEditModalProps {
  onClose: () => void;
}

const inputList = {
  name: {
    label: '이름',
    validate: { required: '이름을 입력해 주세요.' },
    required: true,
    placeholder: '이름을 입력해 주세요.'
  },
  phone: {
    label: '연락처',
    validate: { required: '연락처를 입력해 주세요.' },
    required: true,
    placeholder: '연락처을 입력해 주세요.'
  },
  address: {
    label: '선호지역',
    validate: { required: '선호 지역을 선택해 주세요' },
    required: true,
    placeholder: '선호 지역을 선택해 주세요'
  },
  bio: {
    label: '소개',
    required: false,
    placeholder: '자신을 소개해주세요.'
  }
};
export default function UserEditModal({ onClose }: UserEditModalProps) {
  const {
    control,
    register,
    formState: { errors },
    watch
  } = useForm<IFormInput>({
    defaultValues: defaultValueList,
    mode: 'onTouched'
  });

  const putUserPayload: PutUserPayload = {
    name: watch('name') || '이름',
    phone: watch('phone') || '010-1234-5678',
    address: watch('address'),
    bio: watch('bio')
  };
  const { close } = useModal();

  const onSubmit = () => {
    UserService.putUser(userId, putUserPayload);
    close();
    if (onClose) onClose();
  };

  const handleClose = () => {
    close();
    if (onClose) onClose();
  };
  const registerList = {
    name: register('name', inputList.name.validate),
    phone: register('phone', inputList.phone.validate),
    address: register('address', inputList.address.validate),
    bio: register('bio')
  };

  console.log('민서', putUserPayload);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>프로필 편집</h1>
          <button type="button" onClick={handleClose}>
            ❌
          </button>
        </div>
        <div className={styles.buttonSection}>
          <InputForm
            label={inputList.name.label}
            required={inputList.name.required}
            errorMessage={errors.name?.message}
            placeholder={inputList.name.placeholder}
            {...registerList.name}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <InputForm
                label={inputList.phone.label}
                fieldLabel="원"
                required={inputList.phone.required}
                errorMessage={errors.phone?.message}
                placeholder={inputList.phone.placeholder}
                formatter={formatPhoneNumber}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <SelectForm
                label={inputList.address.label}
                required={inputList.address.required}
                instanceId="address"
                optionList={addressList}
                errorMessage={errors.address?.message}
                placeholder={inputList.address.placeholder}
                {...field}
              />
            )}
          />
          <InputForm
            label={inputList.bio.label}
            required={inputList.bio.required}
            errorMessage={errors.bio?.message}
            placeholder={inputList.bio.placeholder}
            textarea
            {...registerList.bio}
          />
        </div>
        <Button className={styles.submitButton} solid size="large" active onClick={onSubmit}>
          등록하기
        </Button>
      </div>
    </div>
  );
}
