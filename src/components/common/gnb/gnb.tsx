import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './gnb.module.scss';
import LogoutMenu from './gnbFeature/menu/logout';
import Menu from './gnbFeature/menu/menu';
import NotiButton from './gnbFeature/notification/noti-button';
import Searchbar from './gnbFeature/searchbar/searchbar';

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
              <Menu name="로그인" id="login" />
              <Menu name="회원가입" id="signup" />
            </div>
          )}
          {userType === 'employee' && (
            <>
              <div className={styles.gnbMenu}>
                <Menu id="myProfile" name="내 프로필" />
              </div>
              <div className={styles.gnbMenu}>
                <LogoutMenu id="logout" name="로그아웃" />
              </div>
              <div className={styles.gnbMenu}>
                <NotiButton />
              </div>
            </>
          )}
          {userType === 'employer' && (
            <>
              <div className={styles.gnbMenu}>
                <Menu id="myShop" name="내 가게" />
              </div>
              <div className={styles.gnbMenu}>
                <LogoutMenu id="logout" name="로그아웃" />
              </div>
              <div className={styles.gnbMenu}>
                <NotiButton />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gnb;
