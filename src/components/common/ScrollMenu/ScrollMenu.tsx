import { MouseEventHandler } from 'react';

import styles from './ScrollMenu.module.scss';

export default function ScrollMenu({ handleClick, list }: { handleClick: MouseEventHandler; list: string[] }) {
  return (
    <div className={styles.addressListWrapper}>
      {list.map((item) => (
        <li key={item} role="presentation" className={styles.addressList} onClick={handleClick}>
          {item}
        </li>
      ))}
    </div>
  );
}
