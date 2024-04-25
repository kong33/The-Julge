import { useRouter } from 'next/router';
import React from 'react';

import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import PostSearch from '@/components/layout/Main/PostSearch/PostSearch';
import usePagination from '@/libs/hooks/usePagination';

function SearchPage() {
  const router = useRouter();
  const { keyword } = router.query;
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, 6);

  return (
    <PostSearch
      search={keyword}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      currentItems={currentItems}
    />
  );
}

export default SearchPage;
