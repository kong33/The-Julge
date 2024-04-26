import { ReactElement } from 'react';

import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import CustomList from '@/components/layout/Main/CustomList';
import PostSearch from '@/components/layout/Main/PostSearch/PostSearch';
import usePagination from '@/hooks/usePagination';
import OnlytagLayout from '@/layouts/OnlytageLayout';
import styles from '@/pages/index.module.scss';

// pagination option
const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수

function Home() {
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, ITEMS_PER_PAGE);

  return (
    <>
      <section className={styles.customContainer}>
        <article>
          <h2>맞춤 공고</h2>
          {/* 임시 데이터 사용 */}
          <CustomList />
        </article>
      </section>
      <PostSearch
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        currentItems={currentItems}
      />
    </>
  );
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <OnlytagLayout>{page}</OnlytagLayout>;
};
