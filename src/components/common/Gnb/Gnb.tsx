import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/common/Gnb/Gnb.module.scss';
import LogoutMenu from '@/components/feature/Gnb/Logout/Logout';
import Menu from '@/components/feature/Gnb/Menu/Menu';
import NotiButton from '@/components/feature/Gnb/Notification/Notification';
import Searchbar from '@/components/feature/Gnb/Searchbar/Searchbar';

type GnbProps = {
  userType?: 'employee' | 'employer' | 'guest' | undefined;
  // shopId?: string;
};

function Gnb({ userType }: GnbProps) {
  const notiStatus = true;

  console.log(userType);
  return (
    <div className={styles.gnbContainer}>
      <div className={styles.gnbWrapper}>
        <div className={styles.gnbSection}>
          <div className={styles.gnbLogo}>
            <Link href="/">
              <Image src="/svgs/logo.svg" alt=" logo" width={112} height={40} />
            </Link>
          </div>
          <div className={styles.gnbSearchbar}>
            <Searchbar />
          </div>
          {userType === 'guest' && (
            <div className={styles.gnbMenu}>
              <Menu name="로그인" id="sigin" />
              <Menu name="회원가입" id="signup" />
            </div>
          )}
          {userType === 'employee' && (
            <div className={styles.gnbMenu}>
              <Menu id="my-profile" name="내 프로필" />
              <LogoutMenu name="로그아웃" />
              <NotiButton NotiStatus={notiStatus} />
            </div>
          )}
          {userType === 'employer' && (
            <div className={styles.gnbMenu}>
              <Menu id="my-shop" name="내 가게" />
              <LogoutMenu name="로그아웃" />
              <NotiButton NotiStatus={notiStatus} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gnb;
