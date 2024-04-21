import Filter from '@/components/feature/Filter/Filter';
import { useFilter } from '@/components/feature/Filter/FilterContext';
import { addressList } from '@/libs/constants';
import useManageFilter from '@/libs/hooks/useManageFilter';

export default function Gaeun() {
  const { isOpen, open } = useFilter();
  const { filterRef, handleMenuClick, filterData, handleResetBtnClick, handleApplyBtnClick } = useManageFilter();

  if (!isOpen) {
    return (
      <button type="button" onClick={open}>
        click
      </button>
    );
  }
  return (
    <div>
      <Filter
        scrollMenuList={addressList}
        handleMenuClick={handleMenuClick}
        clickedAddress={filterData.address}
        handleResetBtnClick={handleResetBtnClick}
        handleApplyBtnClick={handleApplyBtnClick}
        filterRef={filterRef}
      />
    </div>
  );
}
