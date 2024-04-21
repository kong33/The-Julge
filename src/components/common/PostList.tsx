import React from 'react';

import HighlightKeyword from '@/components/common/HighlightKeyword';
import Post from '@/components/common/Post';
import styles from '@/components/common/PostList.module.scss';

type CardTag = 'red' | 'orange';

type PostData = {
  id: string;
  name: string;
  duration: string;
  workhour: number;
  address: string;
  originalHourlyPay: number;
  hourlyPay: number;
  imageUrl: string;
  closed: boolean;
  changeRate: number;
  isShowTag: CardTag;
  shopId: string;
  noticeId: string;
};

type PostListProps = {
  posts: PostData[];
  isHome?: boolean;
  title?: string;
  filterElement?: React.ReactNode;
  keyword?: string;
};

function PostList({ posts, isHome, title, filterElement, keyword }: PostListProps) {
  return (
    <div className={styles.postListWrapper}>
      {(title || filterElement) && (
        <div className={isHome ? styles.titleHeaderHome : styles.titleHeader}>
          {title && (
            <h2 className={styles.title}>
              <HighlightKeyword text={title} keyword={keyword} className={styles.highlight} />
            </h2>
          )}

          {filterElement && <div className={styles.filterElementWrapper}>{filterElement}</div>}
        </div>
      )}
      <div className={styles.listWrapper}>
        {posts.length === 0 ? (
          <div className={styles.blankWrapper}>게시물이 존재하지 않습니다.</div>
        ) : (
          posts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </div>
  );
}

export default PostList;
