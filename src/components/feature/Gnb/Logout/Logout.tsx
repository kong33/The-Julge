import { useRouter } from 'next/router';
import React from 'react';

import styles from './Logout.module.scss';

type LogoutMenuProps = {
  name?: string;
};

/**
 * 로그아웃 메뉴를 표시하고 클릭 시 로그아웃 처리를 수행하는 컴포넌트입니다.
 * 사용자가 로그아웃 버튼을 클릭하면, 루트 경로('/')로 리디렉션합니다.
 *
 * @param {LogoutMenuProps} props - 컴포넌트에 전달되는 프로퍼티
 * @param {string} [props.name] - 표시할 버튼의 이름 (선택적)
 */

export default function LogoutMenu({ name }: LogoutMenuProps) {
  const router = useRouter();

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <button type="button" className={styles.logout} onClick={handleLogout} style={{ cursor: 'pointer' }}>
      {name || 'Logout'}
    </button>
  );
}
