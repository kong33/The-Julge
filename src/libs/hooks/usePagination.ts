import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usePagination(apifunction: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 위치
  const { data } = apifunction({ limit: itemsPerPage });
  // 전체 페이지 = (전체 카드 개수 / 한 페이지에 보여주는 카드 개수)의 올림수
  const totalPages: number = Math.ceil(data.count / itemsPerPage);

  const totalItems = data.count;
  // 페이지 위치 변경
  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems]); // totalItems가 변경될 때마다 currentPage를 1로 초기화

  return {
    currentPage,
    totalPages,
    onPageChange,
    currentItems: data.items
  };
}
