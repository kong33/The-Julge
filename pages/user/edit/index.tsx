import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Address } from '@/apis/common.type';
import UserService from '@/apis/user/User.service';
import { PutUserPayload } from '@/apis/user/user.type';
import Button from '@/components/common/Button';
import InputForm from '@/components/common/Input/InputForm/InputForm';
import SelectForm from '@/components/common/Input/SelectForm/SelectForm';
import MainLayout from '@/layouts/MainLayout';
import { addressList, pageList } from '@/libs/constants/contants';
import { formatPhoneNumber } from '@/libs/utils/formatter';
import validatePhoneNumber from '@/libs/utils/phoneValidator';
import { ReactComponent as CloseSvg } from '@/public/svgs/close-shop-page.svg';

import styles from './index.module.scss';

type IFormInput = {
  name: string;
  phone: string;
  address: Address;
  bio: string;
};

const inputList = {
  name: {
    label: '이름',
    validate: {
      required: '이름을 입력해 주세요.',
      maxLength: {
        value: 10,
        message: '이름은 최대 10글자까지 입력 가능합니다.'
      }
    },
    required: true,
    placeholder: '이름을 입력해 주세요.'
  },
  phone: {
    label: '연락처',
    validate: {
      required: '연락처를 입력해 주세요.',
      validate: {
        isValidPhoneNumber: (phoneNumber: string) => {
          if (!phoneNumber) return '연락처를 입력해 주세요.';
          return validatePhoneNumber(phoneNumber) || '유효하지 않은 전화번호 형식입니다.';
        }
      }
    },
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
const defaultValueList = {
  name: '',
  phone: '',
  address: addressList[0],
  bio: ''
};
const token =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMWFiNjk1My03MTNkLTQwNWEtOWM2NC05Njk0ZTFmZTFmOTQiLCJpYXQiOjE3MTQwNTYyOTZ9.OTO68dwg4m6AHcyHk841GlAf22OWKt5PxeTpHW_TGR4';
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!token) {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }
  const { req } = context;
  const { cookies } = req;
  const { userId } = cookies;

  if (!userId) {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }
  const { data: userData } = await UserService.getUser(userId);
  const userType = userData?.item?.type ?? '';

  if (userType !== 'employee') {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }

  return {
    props: { userId }
  };
};

export default function UserEditPage(userId: string) {
  console.log(userId);
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
  const onSubmit = () => {
    UserService.putUser(userId, putUserPayload);
  };

  const registerList = {
    name: register('name', inputList.name.validate),
    phone: register('phone', inputList.phone.validate),
    address: register('address', inputList.address.validate),
    bio: register('bio')
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>프로필 편집</h1>
          <Link href={pageList.user()}>
            <CloseSvg className={styles.closeIcon} />
          </Link>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputGridSection}>
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
          </div>
          <InputForm
            label={inputList.bio.label}
            required={inputList.bio.required}
            errorMessage={errors.bio?.message}
            placeholder={inputList.bio.placeholder}
            textarea
            {...registerList.bio}
          />
        </div>
        <div className={styles.buttonSection}>
          <Button className={styles.submitButton} solid size="large" active onClick={onSubmit}>
            등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}

UserEditPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
