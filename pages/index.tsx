import { ReactElement } from 'react';

import AsyncBoundary from '@/components/common/AsyncBoundary';
import CustomList from '@/components/layout/Main/CustomList';
import PostSearch from '@/components/layout/Main/PostSearch';
import OnlytagLayout from '@/layouts/OnlytageLayout';
import styles from '@/pages/index.module.scss';

function Home() {
  return (
    <AsyncBoundary>
      <section className={styles.customContainer}>
        <article>
          <h2>맞춤 공고</h2>
          {/* 임시 데이터 사용 */}
          <CustomList />
        </article>
      </section>
      <PostSearch />
    </AsyncBoundary>
  );
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <OnlytagLayout>{page}</OnlytagLayout>;
};
