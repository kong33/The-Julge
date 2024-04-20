import React from 'react';

import Post from './Post';
import styles from './PostList.module.scss';

type CardTag = 'red' | 'orange' | 'hide';

type PostData = {
  id: string;
  name: string;
  duration: string;
  workhour: number;
  address: string;
  hourlyPay: number;
  imageUrl: string;
  closed: boolean;
  changeRate: number;
  isShowTag: CardTag;
  onClickToDetailPage: () => void;
};

interface PostListProps {
  posts: PostData[];
  isHome?: boolean;
  title?: string;
  filterElement?: React.ReactNode;
}

function PostList({ posts, isHome, title, filterElement }: PostListProps) {
  return (
    <div className={styles.wrapper}>
      {(title || filterElement) && (
        <div className={isHome ? styles.titleHeaderHome : styles.titleHeader}>
          {title && <h2 className={styles.title}>{title}</h2>}
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
