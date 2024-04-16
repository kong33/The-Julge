import { useEffect, useState } from 'react';

import Pagination from '@/components/feature/pagination/pagination';

const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수
function Naeun({ data, totalItems }: { data: string[]; totalItems: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 현재 페이지의 데이터 계산
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

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
  const totalItems = 6;
  const data = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);

  return {
    props: {
      data,
      totalItems,
    },
  };
}
export default Naeun;
