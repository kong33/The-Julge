import React from 'react';

import Post from '@/components/common/Post';
import styles from '@/components/common/PostList.module.scss';

interface PostData {
  id: string;
  title: string;
  description: string;
  onClick: () => void;
}

interface PostListProps {
  posts: PostData[];
}

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} description={post.description} onClick={post.onClick} />
      ))}
    </div>
  );
}

export default PostList;
