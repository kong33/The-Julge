import { Item } from '@/apis/notice/notice.type';
import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import PostList from '@/components/feature/Post/PostList/PostList';
import Pagination from '@/components/feature/pagination/pagination';
import usePagination from '@/hooks/usePagination';

const ITEMS_PER_PAGE = 6; // 페이지 당 아이템 수

function Home() {
  const { currentPage, totalPages, onPageChange, currentItems } = usePagination(useGetNoticeList, ITEMS_PER_PAGE);
  const twoDimensionalArray = currentItems.map((item: Item) => {
    return item.item;
  });
  console.log(twoDimensionalArray);
  return (
    <>
      <h1>Items</h1>
      <PostList datas={twoDimensionalArray} />
      {/* <ul>
        {twoDimensionalArray.map((post: ItemInfo) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul> */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
}

export default Home;
