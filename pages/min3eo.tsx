import React from 'react';

import Post from '../src/components/common/Post';

const CARD_CHIPS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const;

export type CardTag = (typeof CARD_CHIPS)[keyof typeof CARD_CHIPS];

const mockPosts = [
  {
    name: '명품 설농탕',
    duration: '2024년 4월 20일부터 6개월',
    workhour: 8,
    address: '경기도 파주시 금촌 1동',
    payment: '15,000',
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowChip: CARD_CHIPS.Red,
    onClickToDetail: () => console.log('상세 페이지 이동'),
  },
  {
    name: '중급 마케터 모집',
    duration: '2024년 3월 1일부터 3개월',
    workhour: 6,
    address: '서울시 서초구 반포동',
    payment: '50000',
    imageUrl: '/images/default.png',
    closed: true,
    changeRate: 5,
    isShowChip: CARD_CHIPS.Orange,
    onClickToDetail: () => console.log('상세 페이지 이동'),
  },
];

export default function Page() {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <div>
        <Post
          name={mockPosts[0].name}
          duration={mockPosts[0].duration}
          workhour={mockPosts[0].workhour}
          address={mockPosts[0].address}
          payment={mockPosts[0].payment}
          imageUrl={mockPosts[0].imageUrl}
          closed={mockPosts[0].closed}
          changeRate={mockPosts[0].changeRate}
          isShowTag={mockPosts[0].isShowChip}
          onClickToDetail={mockPosts[0].onClickToDetail}
        />
      </div>
    </div>
  );
}
