import { useRouter } from 'next/router';
import React from 'react';

import PostSearch from '@/components/layout/Main/PostSearch/PostSearch';

function SearchPage() {
  const router = useRouter();
  const { keyword } = router.query;
  return <PostSearch search={keyword} />;
}

export default SearchPage;
