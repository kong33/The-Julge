import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import ApplyDetail from '@/components/layout/UserPage/ApplyDetail';
import ProfileCard from '@/components/layout/UserPage/ProfileCard';

import styles from './index.module.scss';

type UserProfile = {
  isProfile: boolean;
  name: string;
  phone: string;
  address: string;
  bio: string;
};

type Notice = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
};

type NoticeListData = {
  items: Notice[];
};

type Props = {
  userData: UserProfile;
  noticeListData: NoticeListData;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // ()안에)context: GetServerSidePropsContext
  const userData: UserProfile = {
    isProfile: false,
    name: '김성운',
    phone: '010-1234-4321',
    address: '서울시 도봉구',
    bio: '열심히 하겠습니다'
  };

  const noticeListData: NoticeListData = {
    items: []
  };
  return { props: { userData, noticeListData } };
};

export default function UserDetailPage({ userData, noticeListData }: Props) {
  const router = useRouter();
  const onClickEdit = () => {
    router.push('/user/edit');
  };
  const onClickList = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={`${styles.profileSection} ${!userData.isProfile ? styles.columnDirection : ''}`}>
          <h1>내 프로필</h1>
          <ProfileCard
            isProfile={userData.isProfile}
            name={userData.name}
            phone={userData.phone}
            address={userData.address}
            bio={userData.bio}
            onClickEdit={onClickEdit}
          />
        </section>
        <section className={styles.listSection}>
          <h1>신청 내역</h1>
          <ApplyDetail notices={noticeListData.items} onClickList={onClickList} />
        </section>
      </div>
    </div>
  );
}
