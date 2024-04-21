import { useState, MouseEventHandler, useEffect } from 'react';

import Filter from '@/components/feature/Filter/Filter';
import { addressList } from '@/libs/constants';
import useFilterOutsideClick from '@/libs/hooks/useOutsideClick';

export default function Gaeun() {
  // filter 사용 예시입니다.
  // filter를 보일지 말 지 state로 관리
  const [openFilter, setOpenFilter] = useState(false);
  // clickedAddress 필수로 관리 해주세요 (prop으로 넘김) => 시작일과 금액도 같이 객체로 관리해주세요
  const [clickedAddress, setClickedAddress] = useState<string[]>([]);

  // useFilterOutsideClick 커스텀 훅에서 다음을 가져와주세요.
  const { isOutsideClicked, setIsOutsideClicked, filterRef } = useFilterOutsideClick();

  // oustide를 눌렀을 때 닫히게 하는 로직
  useEffect(() => {
    if (isOutsideClicked) {
      setOpenFilter(false);
      // setIsOutsideClicked(false);
    }
  }, [isOutsideClicked, setIsOutsideClicked]);

  // 임의의 버튼 (filter를 여는) 클릭 핸들러
  const handleButtonClick: MouseEventHandler = () => {
    setOpenFilter(true);
  };

  // 다음 handleMenuClick을 선언하고
  const handleMenuClick: MouseEventHandler<HTMLElement> = (e) => {
    const clickedMenuText = e.currentTarget.textContent;
    if (clickedMenuText && !clickedAddress.find((item) => item === clickedMenuText)) {
      setClickedAddress((prev) => [...prev, clickedMenuText]);
    }
  };
  // 이건 이렇게 똑같이 작성해서 사용하시면 됩니다.
  const handleResetBtnClick = () => {
    setClickedAddress([]);
  };
  // 이건 나중에 적용하기 했을 때 돌아갈 로직을 적으시면 됩니다.
  const handleApplyBtnClick = () => {
    console.log('적용');
    setOpenFilter(false);
  };
  return (
    <>
      <button type="button" onClick={handleButtonClick}>
        클릭
      </button>
      <Filter
        scrollMenuList={addressList}
        handleMenuClick={handleMenuClick}
        setShowFilter={setOpenFilter}
        isFilterShow={openFilter}
        clickedAddress={clickedAddress}
        filterRef={filterRef}
        handleResetBtnClick={handleResetBtnClick}
        handleApplyBtnClick={handleApplyBtnClick}
      />
    </>
  );
}
