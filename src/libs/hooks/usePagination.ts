import { useEffect, useState } from 'react';

export default function usePagination(totalItems: number, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems]); // totalItems가 변경될 때마다 currentPage를 1로 초기화

  return {
    currentPage,
    totalPages,
    onPageChange,
    startIndex,
    endIndex,
  };
}
