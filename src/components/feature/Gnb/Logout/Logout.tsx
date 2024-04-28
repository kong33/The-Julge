import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '@/components/feature/Gnb/Logout/Logout.module.scss';
import { pageList } from '@/libs/constants/contants';

type LogoutMenuProps = {
  name?: string;
};

function LogoutMenu({ name }: LogoutMenuProps) {
  const router = useRouter();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    Cookies.remove('token');
    Cookies.remove('userId');

    await router.replace(pageList.home());
    window.location.reload();
  };

  return (
    <button type="button" className={styles.logout} onClick={handleLogout}>
      {name || 'Logout'}
    </button>
  );
}

export default LogoutMenu;
