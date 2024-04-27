import Link from 'next/link';
import React from 'react';

import styles from '@/components/feature/Gnb/Menu/Menu.module.scss';

type MenuProps = {
  name?: string;
  id?: string;
};

/**
 * 메뉴 아이템을 표시하고, 제공된 ID에 따라 특정 경로로 이동하는 링크를 제공합니다.
 * ID가 제공되지 않으면, 링크는 홈(루트)으로 설정됩니다.
 *
 * @param {MenuProps} props - 컴포넌트 props
 * @param {string} [props.name] - 메뉴 아이템의 표시명
 * @param {string} [props.id] - 메뉴 아이템과 연결된 경로의 일부로 사용될 식별자
 */
export default function Menu({ name, id }: MenuProps) {
  return (
    <Link href={id ? `/${id}` : '#'}>
      <button type="button" className={styles.menu}>
        {name}
      </button>
    </Link>
  );
}
