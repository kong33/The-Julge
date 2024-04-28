import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import UserService from '@/apis/user/User.service';
import ApplyDetail from '@/components/layout/UserPage/ApplyDetail';
import ProfileCard from '@/components/layout/UserPage/ProfileCard';
import { pageList } from '@/libs/constants/contants';

import styles from './index.module.scss';

type UserData = {
  item: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
};

type Applications = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

type Props = {
  userId: string;
  userData: UserData;
  ApplicationData: Applications[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
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
  if (!userData) {
    return {
      notFound: true
    };
  }
  const ApplicationData = [
    {
      id: 'qwer',
      title: 'Application Title',
      description: 'Description of the application',
      createdAt: '2024-04-25T09:00:00'
    }
  ];

  return { props: { userId, userData, ApplicationData } };
};

export default function UserDetailPage({ userId, userData, ApplicationData }: Props) {
  const router = useRouter();
  const onClickEdit = () => {
    router.push(pageList.userEdit());
  };
  const onClickList = () => {
    router.push(pageList.home());
  };
  console.log('유저아이디', userId);
  console.log('유저 공고', userData.item);

  const isRegisterd = !!(userData.item && userData.item.name);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={`${styles.profileSection} ${!isRegisterd ? styles.columnDirection : ''}`}>
          <h1>내 프로필</h1>
          <ProfileCard isRegisterd={isRegisterd} onClickEdit={onClickEdit} {...userData.item} />
        </section>
        {isRegisterd && (
          <section className={styles.listSection}>
            <h1>신청 내역</h1>
            <ApplyDetail ApplicationData={ApplicationData} onClickList={onClickList} />
          </section>
        )}
      </div>
    </div>
  );
}
