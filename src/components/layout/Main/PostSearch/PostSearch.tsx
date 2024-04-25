import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import SelectForm from '@/components/common/Input/SelectForm/SelectForm';
import PostList from '@/components/feature/Post/PostList/PostList';
import Pagination from '@/components/feature/pagination/pagination';
import styles from '@/pages/index.module.scss';

// selectForm option
type IFormInput = {
  filter: string | { value: string; label: string };
};
const optionList = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];
const defaultFormValues = {
  filter: { value: '마감임박순', label: '마감임박순' } // SelectForm의 기본값은 {value,label} 객체쌍으로 전달해주세요.
};

type PostSearchProps = {
  search?: string | string[];
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentItems: any[];
};
function PostSearch({ search = '', currentPage, totalPages, onPageChange, currentItems }: PostSearchProps) {
  // selectForm option
  const {
    control, // react-hook-form의 Controller에 연결됩니다.
    formState: { errors } // 폼 상태 객체입니다. errors['form'].message에 validate의 에러 메세지가 저장됩니다.
  } = useForm<IFormInput>({
    defaultValues: defaultFormValues, // 폼 기본값
    mode: 'onBlur' // onBlur 시 검증
  });

  let pageTitle = <h2>전체 공고</h2>;

  if (search) {
    pageTitle = (
      <h2>
        <span className={styles.highlight}>{search}</span>에 대한 공고 목록
      </h2>
    );
  }

  return (
    <section className={styles.noticeContainer}>
      <article className={styles.noticeList}>
        <div className={styles.txtContent}>
          {pageTitle}
          <div className={styles.condition}>
            <Controller
              name="filter"
              control={control}
              render={({ field }) => (
                <SelectForm
                  size="filter"
                  errorMessage={errors.filter?.message}
                  className={styles.filterInput}
                  instanceId="filter"
                  optionList={optionList}
                  {...field}
                />
              )}
            />
            <Button active size="small">
              asd
            </Button>
            {/* filter도 추가 */}
          </div>
        </div>
        <PostList datas={currentItems} />
      </article>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </section>
  );
}

export default PostSearch;
