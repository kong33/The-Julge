import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Gnb.module.scss';
import LogoutMenu from '../feature/Gnb/Logout/Logout';
import Menu from '../feature/Gnb/Menu/Menu';
import NotiButton from '../feature/Gnb/Notification/Notification';
import Searchbar from '../feature/Gnb/Searchbar/Searchbar';

type GnbProps = {
  userType?: 'employee' | 'employer' | 'guest';
  NotiStatus?: boolean;
};

/**
 * 전체적인 GNB 컴포넌트
 *
 * @param {string} [props.userType] - 사용자 유형 ('employee', 'employer', 'guest')
 * @param {boolean} [props.NotiStatus] - 알림 상태 유무를 불린 값으로 받아옴
 */

function Gnb({ userType = 'employee', NotiStatus = true }: GnbProps) {
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
              <Menu id="my-profile" name="내 프로필" />
              <LogoutMenu name="로그아웃" />
              <NotiButton NotiStatus={NotiStatus} />
            </div>
          )}
          {userType === 'employer' && (
            <div className={styles.gnbMenu}>
              <Menu id="my-shop" name="내 가게" />
              <LogoutMenu name="로그아웃" />
              <NotiButton NotiStatus={NotiStatus} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gnb;
