import Link from 'next/link';
import React from 'react';

import styles from './menu.module.scss';

type MenuProps = {
  name?: string;
  id?: string;
};

export default function Menu({ name, id }: MenuProps) {
  return (
    <Link href={id ? `/${id}` : '#'} style={{ textDecoration: 'none' }}>
      <div className={styles.menu}>{name}</div>
    </Link>
  );
}
