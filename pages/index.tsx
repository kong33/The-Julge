import { ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Item } from '@/apis/notice/notice.type';
import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import SelectForm from '@/components/common/Input/SelectForm/SelectForm';
import PostList from '@/components/feature/Post/PostList/PostList';
import Pagination from '@/components/feature/pagination/pagination';
import usePagination from '@/hooks/usePagination';
import OnlytagLayout from '@/layouts/OnlytageLayout';
import styles from '@/pages/index.module.scss';

const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수

type IFormInput = {
  filter: string | { value: string; label: string };
};
const optionList = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];
// 폼 기본값입니다.
const defaultFormValues = {
  filter: { value: '마감임박순', label: '마감임박순' } // SelectForm의 기본값은 {value,label} 객체쌍으로 전달해주세요.
};

function Home() {
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, ITEMS_PER_PAGE);
  const { data } = useGetNoticeList({ limit: 3 });
  const twoDimensionalArray = currentItems.map((item: Item) => {
    return item.item;
  });
  const customList = data.items.map((item: Item) => {
    return item.item;
  });

  const {
    control, // react-hook-form의 Controller에 연결됩니다.
    formState: { errors } // 폼 상태 객체입니다. errors['form'].message에 validate의 에러 메세지가 저장됩니다.
  } = useForm<IFormInput>({
    defaultValues: defaultFormValues, // 폼 기본값
    mode: 'onBlur' // onBlur 시 검증
  });

  return (
    <>
      <section className={styles.customContainer}>
        <article>
          <h2>맞춤 공고</h2>
          {/* 임시 데이터 사용 */}
          <PostList datas={customList} />
        </article>
      </section>
      <section className={styles.noticeContainer}>
        <article>
          <div>
            <h3>전체 공고</h3>
            <Controller
              name="filter"
              control={control}
              render={({ field }) => (
                <SelectForm
                  size="filter"
                  errorMessage={errors.filter?.message}
                  required
                  className={styles.filterInput}
                  instanceId="filter"
                  optionList={optionList}
                  {...field}
                />
              )}
            />
          </div>
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
