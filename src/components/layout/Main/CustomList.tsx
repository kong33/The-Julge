import { JSX } from 'react';

import { Item } from '@/apis/notice/notice.type';
import { useGetNoticeList } from '@/apis/notice/useNoticeService';
import Post from '@/components/feature/Post/Post';
import { PostData, PostProps } from '@/components/feature/Post/PostType';
import styles from '@/pages/index.module.scss';

function CustomList() {
  const { data } = useGetNoticeList({ limit: 3 });
  const customPost = data.items.map((item: Item) => {
    return item.item;
  });

  const posts = customPost.map((item: PostData) => ({
    name: item.shop?.item.name,
    id: item.id,
    startedAt: item.startsAt,
    workhour: item.workhour,
    address: item.shop?.item.address1,
    hourlyPay: item.hourlyPay,
    originalHourlyPay: item.shop?.item.originalHourlyPay,
    imageUrl: item.shop?.item.imageUrl,
    closed: item.closed,
    shopId: item.shop?.item.id
  }));

  return (
    <div className={styles.customList}>
      {posts.map((post: JSX.IntrinsicAttributes & PostProps) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default CustomList;
