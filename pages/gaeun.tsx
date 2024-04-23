import Filter from '@/components/feature/Filter/Filter';
import { useFilter } from '@/components/feature/Filter/FilterContext';
import { addressList } from '@/libs/constants';
import useManageFilter from '@/libs/hooks/useManageFilter';

// const alertlist = [
//   {
//     shop: 'gaeunshop',
//     result: 'rejected',
//     createdAt: '2024-04-17T18:41:16.187Z', // createdAt
//     startsAt: '2024-04-23T06:00:00Z', // notice - startsAt
//     workhour: 8
//   },
//   {
//     shop: 'gaeunshop1',
//     result: 'accepted',
//     createdAt: '2024-04-17T18:41:16.187Z', // createdAt
//     startsAt: '2024-04-23T06:00:00Z', // notice - startsAt
//     workhour: 9
//   }
// ];
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
