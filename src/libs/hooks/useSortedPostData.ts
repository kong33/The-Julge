import { useEffect, useState } from 'react';

import { Item } from '@/apis/notice/notice.type';
import { useGetNoticeList } from '@/apis/notice/useNoticeService';

/**
 * Pagination 컴포넌트
 * @param apifunction 사용할 api 함수 => items 불러와야할 api 함수 작성
 * @param itemsPerPage 한 페이지에 보여줄 post 개수]
 * @param sort post 정렬 기준
 * @param filter filter 정렬 데이터
 * @
 * @return currentPage: number;  현재 페이지
 * @return totalPages: number; 총 페이지 개수
 * @return onPageChange: (page: number) => void; pagechange 함수
 * @return currentItems: Array<any>; 반환하는 데이터 리스트
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useSortedPostData(
  itemsPerPage: number,
  {
    keyword,
    address,
    startsAtGte,
    hourlyPayGte,
    sort
  }: {
    keyword?: string;
    address?: string;
    startsAtGte?: string;
    hourlyPayGte?: number;
    sort?: 'time' | 'pay' | 'hour' | 'shop';
  } = {}
) {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 위치
  const [offsetNum, setOffsetNum] = useState<number>(0);

  const { data } = useGetNoticeList({ limit: itemsPerPage, offset: offsetNum });

  const totalItem = data.count;
  const totalPages: number = Math.ceil(totalItem / itemsPerPage);
  useEffect(() => {
    setOffsetNum((currentPage - 1) * itemsPerPage);
  }, [currentPage, data.items, itemsPerPage]);

  // 페이지 위치 변경
  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };
  const dataList = data.items.map((item: Item) => {
    return item.item;
  });

  console.log(keyword, address, startsAtGte, hourlyPayGte, sort);
  return {
    currentPage,
    totalPages,
    onPageChange,
    currentItems: dataList
  };
}
