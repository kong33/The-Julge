import PostList from '@/components/common/PostList';

const mockPosts = [
  {
    id: '1',
    title: 'Post Title 1',
    description: 'Description of post 1',
    onClick: () => console.log('Post 1 clicked'),
  },
  {
    id: '2',
    title: 'Post Title 2',
    description: 'Description of post 2',
    onClick: () => console.log('Post 2 clicked'),
  },
];

export default function Page() {
  return (
    <div>
      <PostList posts={mockPosts} />
    </div>
  );
}
