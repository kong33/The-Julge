import { MouseEventHandler, RefObject, ReactNode, createContext, useState, useContext } from 'react';

import { Address as AddressType } from '@/apis/common.type';
import Badge from '@/components/common/Badge/Badge';
import Button from '@/components/common/Button';
import styles from '@/components/feature/Filter/Filter.module.scss';
import ScrollMenu from '@/components/feature/Filter/ScrollMenu/ScrollMenu';
import { ReactComponent as CloseButton } from '@/public/svgs/closeButton.svg';

type FilterContextProps = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const FilterContext = createContext<FilterContextProps | null>(null);
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('root 로 감싸기');
  return context;
};
export function FilterProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <FilterContext.Provider value={{ isOpen, open, close }}>{children}</FilterContext.Provider>;
}

type FilterProps = {
  // isFilterShow?: boolean;
  filterRef: RefObject<HTMLDivElement>;
  // setShowFilter: Dispatch<SetStateAction<boolean>>;
  scrollMenuList: AddressType[];
  handleMenuClick: MouseEventHandler;
  clickedAddress: AddressType[];
  handleResetBtnClick: MouseEventHandler;
  handleApplyBtnClick?: MouseEventHandler;
};
/**
 * Filter 컴포넌트
 * param isFilterShow 외부에서 필터 open 버튼 클릭시 true로 들어가도록 넣어주세요 (state 관리), requried ; boolean
 * param filterRef 필터에 걸 ref. useClickFilterOutsidegnrdml filterRef 가져다 쓰면 됨, required ; RefObject<HTMLDivElement>
 * param setShowFilter filter를 켤지 끌 지 정하는 setter, required ; Dispatch<React.SetStateAction<boolean>>;
 * @param scrollMenuList 스크롤 메뉴에 들어갈 list, 우리 프로젝트에서는 constatns/addressList required; sring[]
 * @param handleMenuClick 메뉴를 클릭했을 때의 핸들러 . required ; MouseEventHanler
 * @param clickedAddress 클릭된 address들을 모아둔 List. required ; string[]
 * @param handleResetBtnClick 초기화 버튼 클릭시 핸들러. clickedAddress를 초기화해주고 input값도 초기화해줌. required; MouseEventHandler
 * @param handleApplyBtnClick 적용하기 버튼 클릭 시 동작할 handler ; MouseEventHandler
 */

export function Filter({
  scrollMenuList,
  handleMenuClick,
  clickedAddress,
  handleResetBtnClick,
  handleApplyBtnClick,
  filterRef
}: FilterProps) {
  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    return null; // 로딩처리
  }
  const { close } = filterContext;
  return (
    <div className={styles.container} ref={filterRef}>
      <div className={styles.header}>
        <h1>상세 필터</h1>
        <CloseButton onClick={() => close()} />
      </div>

      <section className={styles.locationWrapper}>
        <p>위치</p>
        <ScrollMenu list={scrollMenuList} handleClick={handleMenuClick} />
        <section className={styles.badgeList}>
          {clickedAddress.map((item) => (
            <div key={item}>
              <Badge title={item} color="red" closeBtn />
            </div>
          ))}
        </section>
      </section>

      <hr />

      <section className={styles.dateWrapper}>
        <p>시작일</p>
        <input placeholder="입력" />
      </section>

      <hr />

      <section className={styles.chargeWrapper}>
        <p>금액</p>
        <section>
          <input placeholder="입력" />
          <p>이상부터</p>
        </section>
      </section>

      <section className={styles.btnWrapper}>
        <Button
          solid={false}
          size="large"
          active
          submit={false}
          className={styles.resetBtn}
          onClick={handleResetBtnClick}
        >
          초기화
        </Button>
        <Button solid size="large" active submit={false} className={styles.applyBtn} onClick={handleApplyBtnClick}>
          적용하기
        </Button>
      </section>
    </div>
  );
}
