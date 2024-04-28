import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from '@/components/feature/Gnb/Searchbar/Searchbar.module.scss';

export default function Searchbar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      const routePath = searchInput ? `/search?keyword=${searchInput}` : '/search';
      router.push(routePath);
      setSearchInput('');
    }
  };

  return (
    <input
      value={searchInput}
      onChange={handleChangeInput}
      onKeyDown={handlePressEnter}
      placeholder="가게 이름으로 찾아보세요"
      className={styles.searchbar}
    />
  );
}
