import Pagination from '@/components/feature/pagination/pagination';
import usePagination from '@/hooks/usePagination';

const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수
function Naeun({ data, totalItems }: { data: string[]; totalItems: number }) {
  const { currentPage, totalPages, onPageChange, startIndex, endIndex } = usePagination(totalItems, ITEMS_PER_PAGE);

  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

// 목업 데이터 생성
export async function getStaticProps() {
  const totalItems = 100;
  const data = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);

  return {
    props: {
      data,
      totalItems,
    },
  };
}
export default Naeun;
