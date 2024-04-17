import Link from 'next/link';
import React from 'react';

import styles from './logout.module.scss';

type LogoutMenuProps = {
  name?: string;
  id?: string;
};

export default function LogoutMenu({ name, id }: LogoutMenuProps) {
  return (
    <Link href={id ? `/${id}` : '#'} style={{ textDecoration: 'none' }}>
      <div className={styles.logout}>{name}</div>
    </Link>
  );
}
