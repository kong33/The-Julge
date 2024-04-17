import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './gnb.module.scss';
import Menu from './gnbFeature/menu/menu/menu';
import NotiButton from './gnbFeature/menu/notification/noti-button';
import Searchbar from './gnbFeature/menu/searchbar/searchbar';

interface GnbProps {
  userType?: 'employee' | 'employer' | 'guest';
}

function Gnb({ userType = 'employee' }: GnbProps) {
  return (
    <div className={styles.gnbContainer}>
      <div className={styles.gnbWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src="/images/logo.svg" alt=" logo" width={112} height={40} />
          </Link>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>

      <div className={styles.gnbWrapper}>
        {userType === 'guest' && (
          <>
            <div className={styles.gnbMenu}>
              <Menu name="로그인" id="login" />
            </div>
            <div className={styles.gnbMenu}>
              <Menu name="회원가입" id="signup" />
            </div>
          </>
        )}
        {userType === 'employee' && (
          <>
            <div className={styles.gnbMenu}>
              <Menu id="myProfile" name="내 프로필" />
            </div>
            <div className={styles.gnbMenu}>
              <Menu id="logout" name="로그아웃" />
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
              <Menu id="logout" name="로그아웃" />
            </div>
            <div className={styles.gnbMenu}>
              <NotiButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Gnb;
