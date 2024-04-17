import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Gnb.module.scss';
import LogoutMenu from '../feature/Gnb/menu/logout';
import Menu from '../feature/Gnb/menu/menu';
import NotiButton from '../feature/Gnb/notification/noti-button';
import Searchbar from '../feature/Gnb/searchbar/searchbar';

interface GnbProps {
  userType?: 'employee' | 'employer' | 'guest';
}

function Gnb({ userType = 'guest' }: GnbProps) {
  return (
    <div className={styles.gnbContainer}>
      <div className={styles.gnbWrapper}>
        <div className={styles.gnbSection}>
          <div className={styles.gnbLogo}>
            <Link href="/">
              <Image src="/images/logo.svg" alt=" logo" width={112} height={40} />
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
              <Menu id="myProfile" name="내 프로필" />
              <LogoutMenu id="logout" name="로그아웃" />
              <NotiButton />
            </div>
          )}
          {userType === 'employer' && (
            <div className={styles.gnbMenu}>
              <Menu id="myShop" name="내 가게" />
              <LogoutMenu id="logout" name="로그아웃" />
              <NotiButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gnb;
