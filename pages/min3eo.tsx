import React from 'react';

import PostList from '../src/components/common/PostList';

const CARD_TAGS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

const mockPosts = [
  {
    id: '1',
    name: '명품 설농탕1',
    duration: '2023-01-02 15:00~18:00',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    hourlyPay: 15000,
    imageUrl: '/images/default.png',
    closed: true,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    onClickToDetailPage: () => console.log('상세 페이지 이동'),
  },
  {
    id: '2',
    name: '명품 설농탕2',
    duration: '2023-01-02 15:00~18:00 ',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    hourlyPay: 15000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    onClickToDetailPage: () => console.log('상세 페이지 이동'),
  },
  {
    id: '3',
    name: '명품 설농탕3',
    duration: '2023-01-02 15:00~18:00',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    hourlyPay: 15000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    onClickToDetailPage: () => console.log('상세 페이지 이동'),
  },
  {
    id: '4',
    name: '명품 설농탕4',
    duration: '2023-01-02 15:00~18:00',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    hourlyPay: 15000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    onClickToDetailPage: () => console.log('상세 페이지 이동'),
  },
];

export default function Page() {
  return (
    <div style={{ padding: '30px' }}>
      <div>
        <PostList posts={mockPosts} />
      </div>
    </div>
  );
}
