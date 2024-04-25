import { ReactElement } from 'react';

import { Item } from '@/apis/notice/notice.type';
import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import PostList from '@/components/feature/Post/PostList/PostList';
import Pagination from '@/components/feature/pagination/pagination';
import CustomList from '@/components/layout/Main/CustomList';
import PostSearch from '@/components/layout/Main/PostSearch/PostSearch';
import usePagination from '@/hooks/usePagination';
import OnlytagLayout from '@/layouts/OnlytageLayout';
import styles from '@/pages/index.module.scss';

// pagination option
const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수

function Home() {
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, ITEMS_PER_PAGE);
  const twoDimensionalArray = currentItems.map((item: Item) => {
    return item.item;
  });

  return (
    <>
      <section className={styles.customContainer}>
        <h2>맞춤 공고</h2>
        {/* 임시 데이터 사용 */}
        <CustomList />
      </section>
      <section className={styles.noticeContainer}>
        <article className={styles.noticeList}>
          <PostSearch />
          <PostList datas={twoDimensionalArray} />
        </article>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </section>
    </>
  );
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <OnlytagLayout>{page}</OnlytagLayout>;
};
