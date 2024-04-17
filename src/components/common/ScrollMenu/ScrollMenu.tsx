import { MouseEventHandler } from 'react';

import { addressList } from '@/libs/constants';

import styles from './ScrollMenu.module.scss';

export default function ScrollMenu({ handleClick }: { handleClick: MouseEventHandler }) {
  return (
    <div className={styles.addressListWrapper}>
      {addressList.map((item) => (
        <li key={item} role="presentation" className={styles.addressList} onClick={handleClick}>
          {item}
        </li>
      ))}
    </div>
  );
}
