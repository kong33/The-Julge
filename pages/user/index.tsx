import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { GetApplicationListRes } from '@/apis/application/application.type';
import UserService from '@/apis/user/User.service';
import ApplyDetail from '@/components/layout/UserPage/ApplyDetail';
import ProfileCard from '@/components/layout/UserPage/ProfileCard';
import { pageList } from '@/libs/constants/contants';
import applicationData1 from '@/pages/test';

import styles from './index.module.scss';

type UserData = {
  item: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
};

type Props = {
  userId: string;
  userData: UserData;
  applicationData: GetApplicationListRes;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

  const applicationData = applicationData1;

  return { props: { userId, userData, applicationData } };
};
export default function UserDetailPage({ userId, userData, applicationData }: Props) {
  console.log('유저 공고 data', applicationData);
  const router = useRouter();
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
          <ProfileCard isRegisterd={isRegisterd} {...userData.item} />
        </section>
        {isRegisterd && (
          <section className={styles.listSection}>
            <h1>신청 내역</h1>
            <ApplyDetail applicationData={applicationData} onClickList={onClickList} />
          </section>
        )}
      </div>
    </div>
  );
}
