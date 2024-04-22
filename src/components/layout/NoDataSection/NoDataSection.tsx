import React from 'react';

import Button from '@/components/common/Button';
import styles from '@/components/layout/NoDataSection/NoDataSection.module.scss';

type NoDataSectionProps = {
  onClick?: () => void;
  title: string;
  description: string;
  buttonLabel: string;
};

// eslint-disable-next-line no-undef
export default function NoDataSection({ onClick, title, description, buttonLabel }: NoDataSectionProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <article className={styles.article}>
        <p className={styles.description}>{description}</p>
        <Button className={styles.button} onClick={onClick} size="medium" active solid>
          {buttonLabel}
        </Button>
      </article>
    </section>
  );
}
