import { useEffect, useState } from 'react';

/**
 * Pagination 컴포넌트
 * @param apifunction 사용할 api 함수 => items 불러와야할 api 함수 작성
 * @param itemsPerPage
 * @param onPageChange 현재 페이지 usestate에 저장하는 함수: onPageChange(저장할 페이지번호)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usePagination(apifunction: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 위치
  const [offsetNum, setOffsetNum] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const { data } = apifunction({ limit: itemsPerPage, offset: offsetNum });

  const totalItem = data.count;
  const totalPages: number = Math.ceil(totalItem / itemsPerPage);
  useEffect(() => {
    setOffsetNum((currentPage - 1) * itemsPerPage);
  }, [currentPage, data.items]);

  // 페이지 위치 변경
  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    onPageChange,
    currentItems: data.items
  };
}
