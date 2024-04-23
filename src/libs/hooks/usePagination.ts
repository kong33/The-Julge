import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usePagination(apifunction: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 위치
  const [offsetNum, setOffsetNum] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [itemData, setItemData] = useState<any[]>([]);

  const { data } = apifunction({ limit: itemsPerPage, offset: offsetNum });

  const totalItem = data.count;
  const totalPages: number = Math.ceil(totalItem / itemsPerPage);

  useEffect(() => {
    setItemData(data.items);
    setOffsetNum((currentPage - 1) * itemsPerPage);
    console.log(itemData, offsetNum, currentPage);
  }, [currentPage, data.items]);

  // 페이지 위치 변경
  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    onPageChange,
    currentItems: itemData
  };
}
