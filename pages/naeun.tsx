import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import Pagination from '@/components/feature/pagination/pagination';
import usePagination from '@/hooks/usePagination';

const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수
type Shop = {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
};

type Item = {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: {
    item: Shop;
    href: string;
  };
};

function Naeun() {
  // const { data } = useGetNoticeList({ limit: ITEMS_PER_PAGE });
  // console.log(data);
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, ITEMS_PER_PAGE);
  console.log(currentPage, totalPages, onPageChange, currentItems);
  return (
    <>
      <h1>Items</h1>
      <ul>
        {currentItems.map((item: Item, index: number) => (
          <li>{index}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
}

export default Naeun;
