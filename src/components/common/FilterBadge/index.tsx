import { useState } from 'react';

import { ReactComponent as BadgeCloseButton } from '@/public/svgs/badgeCloseBtn.svg';

import styles from './styles.module.scss';

export default function FilterBadge({ title }: { title: string }) {
  const [isShown, setIsShown] = useState(true);
  const handleClick = () => {
    setIsShown(false);
  };

  return (
    <div className={`${styles.container} ${isShown ? styles.show : styles.hide}`}>
      <p>{title}</p>
      <BadgeCloseButton onClick={handleClick} cursor="pointer" />
    </div>
  );
}
