import React from 'react';

import styles from '@/components/common/Post.module.scss';

interface PostProps {
  title: string;
  description: string;
  onClick: () => void;
}

function Post({ title, description, onClick }: PostProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      className={styles.post}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`Post titled ${title}`}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Post;
