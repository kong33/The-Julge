import axios, { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Address } from '@/apis/common.type';
import UserService from '@/apis/user/User.service';
import { usePutUser } from '@/apis/user/useUserService';
import { PutUserPayload } from '@/apis/user/user.type';
import Button from '@/components/common/Button/Button';
import InputForm from '@/components/common/Input/InputForm/InputForm';
import SelectForm from '@/components/common/Input/SelectForm/SelectForm';
import Modal from '@/components/feature/Modal/Modal';
import ModalGroup, { useModal } from '@/components/feature/Modal/ModalGroup';
import MainLayout from '@/layouts/MainLayout';
import { addressList, pageList } from '@/libs/constants/contants';
import { formatPhoneNumber } from '@/libs/utils/formatter';
import validatePhoneNumber from '@/libs/utils/phoneValidator';
import styles from '@/pages/user/edit/index.module.scss';
import { ReactComponent as CloseSvg } from '@/public/svgs/close-shop-page.svg';

interface UserItem {
  id: string;
  email: string;
  type: 'employee';
  name: string;
  phone: string;
  address: Address;
  bio: string;
  shop: null;
}

interface LinkItem {
  rel: string;
  description: string;
  method: 'GET' | 'PUT';
  href: string;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

type GetUserData = {
  getUserData: {
    item: UserItem;
    links: LinkItem[];
  };
};

type IFormInput = {
  name: string;
  phone: string;
  address: { value: Address; label: Address } | null;
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const { cookies } = req;
  const { token } = cookies;

  if (!token) {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }

  const userId = jwtDecode<{ userId: string }>(token).userId ?? '';

  if (!userId) {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }
  const { data: getUserData } = await UserService.getUser(userId);
  const userType = getUserData?.item?.type ?? '';

  if (userType !== 'employee') {
    return {
      redirect: {
        destination: pageList.home(),
        permanent: false
      }
    };
  }

  return {
    props: { getUserData }
  };
};

export default function UserRegisterPage(getUserData: GetUserData) {
  // eslint-disable-next-line react/destructuring-assignment
  const userData = getUserData.getUserData;
  const router = useRouter();

  const defaults = userData.item;
  const defaultValueList = {
    name: defaults.name || '',
    phone: defaults.phone || '',
    address: defaults.address ? { value: defaults.address, label: defaults.address } : null, // address가 존재하면 구조에 맞게 설정
    bio: defaults.bio || ''
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IFormInput>({
    defaultValues: defaultValueList,
    mode: 'onTouched'
  });

  const putUserPayload: PutUserPayload = {
    name: watch('name'),
    phone: watch('phone'),
    address: watch('address')?.value || '서울시 중구',
    bio: watch('bio')
  };

  const { mutate: putUserData } = usePutUser(userData.item.id, putUserPayload);
  const [openModal, setOpenModal] = useState<ReactElement | null>(null);
  const { toggle } = useModal();
  const handleClickCloseModal = {
    onError: () => {},
    onSuccess: () => {
      router.push(pageList.user());
    }
  };

  const modalList = {
    // eslint-disable-next-line react/no-unstable-nested-components
    onError: (message: string) => <Modal.Error onClick={handleClickCloseModal.onError}>{message}</Modal.Error>,
    onSuccess: <Modal.Check onClick={handleClickCloseModal.onSuccess}>등록이 완료되었습니다.</Modal.Check>
  };

  const registerList = {
    name: register('name', inputList.name.validate),
    phone: register('phone', inputList.phone.validate),
    address: register('address', inputList.address.validate),
    bio: register('bio')
  };

  const onSuccess = () => {
    setOpenModal(modalList.onSuccess);
    toggle();
  };

  const onError = (e: AxiosError) => {
    if (axios.isAxiosError(e) && e.response) {
      const { message } = e.response.data as { message: string };
      setOpenModal(modalList.onError(message));
      toggle();
    }
  };

  const onSubmit = () => {
    putUserData(putUserPayload, { onSuccess, onError });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>내 프로필 편집</h1>
            <Link href={pageList.user()}>
              <CloseSvg className={styles.closeIcon} />
            </Link>
          </div>
          <div className={styles.inputSection} onSubmit={handleSubmit(onSubmit)}>
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
            <ModalGroup.Trigger disableToggle>
              <Button className={styles.submitButton} onClick={handleSubmit(onSubmit)} submit active size="large" solid>
                등록하기
              </Button>
            </ModalGroup.Trigger>
          </div>
        </div>
      </div>
      <ModalGroup.Content>{openModal}</ModalGroup.Content>
    </>
  );
}

UserRegisterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
