import { useState } from 'react';

import { ReactComponent as CloseButton } from '@/public/svgs/badgeCloseBtn.svg';

import styles from './Badge.module.scss';

type BadgeProps = {
  title: string;
  color: string;
  closeBtn?: boolean;
};

export default function Badge({ title, color, closeBtn = false }: BadgeProps) {
  const [isShown, setIsShown] = useState(true);
  const handleCloseButtonClick = () => {
    setIsShown(false);
  };

  return (
    <div className={`${styles.container} ${styles[color]} ${isShown ? styles.show : styles.hide}`}>
      <p>{title}</p>
      {closeBtn && <CloseButton onClick={handleCloseButtonClick} />}
    </div>
  );
}
