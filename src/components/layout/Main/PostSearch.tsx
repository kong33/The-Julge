import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import SelectForm from '@/components/common/Input/SelectForm/SelectForm';
import Filter from '@/components/feature/Filter/Filter';
import { useFilter } from '@/components/feature/Filter/FilterContext';
import PostList from '@/components/feature/Post/PostList/PostList';
import Pagination from '@/components/feature/pagination/pagination';
import { addressList } from '@/libs/constants/contants';
import useManageFilter from '@/libs/hooks/useManageFilter';
import useSortedPostData from '@/libs/hooks/useSortedPostData';
import styles from '@/pages/index.module.scss';
// pagination option
const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수

// selectForm option
type IFormInput = {
  filter: string | { value: string; label: string };
};
const optionList = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];
const defaultFormValues = {
  filter: { value: '마감임박순', label: '마감임박순' } // SelectForm의 기본값은 {value,label} 객체쌍으로 전달해주세요.
};

type PostSearchProps = {
  search?: string;
};
function PostSearch({ search = '' }: PostSearchProps) {
  const { currentPage, totalPages, onPageChange, currentItems } = useSortedPostData(ITEMS_PER_PAGE, {
    keyword: search
  });

  // selectForm option
  const {
    control, // react-hook-form의 Controller에 연결됩니다.
    formState: { errors }, // 폼 상태 객체입니다. errors['form'].message에 validate의 에러 메세지가 저장됩니다.
    watch
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
  // select 데이터
  const watchSelect = watch('filter');
  const selectedValue = typeof watchSelect === 'string' ? watchSelect : watchSelect?.value;
  console.log(selectedValue);

  // filter
  const { isOpen, open, close } = useFilter();
  const { filterRef, handleMenuClick, filterData, handleResetBtnClick, handleApplyBtnClick } = useManageFilter();
  const handlefilterClick = () => {
    if (isOpen) {
      close();
      console.log(isOpen);
    } else {
      open();
      console.log('11');
    }
  };
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
            <div className={styles.filterContent}>
              <Button solid active size="small" onClick={handlefilterClick} className={styles.filterBt}>
                상세필터
              </Button>
              {/* filter도 추가 */}
              {isOpen && (
                <Filter
                  scrollMenuList={addressList}
                  handleMenuClick={handleMenuClick}
                  clickedAddress={filterData.address}
                  handleResetBtnClick={handleResetBtnClick}
                  handleApplyBtnClick={handleApplyBtnClick}
                  filterRef={filterRef}
                />
              )}
            </div>
          </div>
        </div>
        <PostList datas={currentItems} />
      </article>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </section>
  );
}

export default PostSearch;
