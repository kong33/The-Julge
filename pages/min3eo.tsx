import React from 'react';

import Button from '@/components/common/Button';

import PostList from '../src/components/common/PostList';

const CARD_TAGS = {
  Red: 'red',
  Orange: 'orange',
} as const;

const filterButtons = (
  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    <Button solid size="medium" active onClick={() => console.log('마감임박순 클릭')}>
      마감임박순
    </Button>
    <Button solid={false} size="medium" active onClick={() => console.log('상세 필터 클릭')}>
      상세 필터
    </Button>
  </div>
);
const mockPosts = [
  {
    id: '1',
    name: '명품 설농탕1',
    duration: '2021-04-01T09:00:00Z',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    originalHourlyPay: 10000,
    hourlyPay: 12000,
    imageUrl: '/images/default.png',
    closed: true,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    shopId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
    noticeId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
  },
  {
    id: '2',
    name: '명품 설농탕2',
    duration: '2021-04-01T09:00:00Z',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    originalHourlyPay: 10000,
    hourlyPay: 21000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    shopId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
    noticeId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
  },
  {
    id: '3',
    name: '명품 설농탕3',
    duration: '2021-04-01T09:00:00Z',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    originalHourlyPay: 10000,
    hourlyPay: 12000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    shopId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
    noticeId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
  },
  {
    id: '4',
    name: '명품 설농탕4',
    duration: '2021-04-01T09:00:00Z',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    originalHourlyPay: 10000,
    hourlyPay: 9000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    shopId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
    noticeId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
  },
  {
    id: '5',
    name: '명품 설농탕4',
    duration: '2021-04-01T09:00:00Z',
    workhour: 8,
    address: '경기도 파주시 금촌동',
    originalHourlyPay: 10000,
    hourlyPay: 19000,
    imageUrl: '/images/default.png',
    closed: false,
    changeRate: 10,
    isShowTag: CARD_TAGS.Red,
    shopId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
    noticeId: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
  },
];

export default function Page() {
  return (
    <div style={{ padding: '30px' }}>
      <div>
        <PostList
          posts={mockPosts}
          isHome={false}
          title="맛집에 대한 공고 목록"
          filterElement={filterButtons}
          keyword="맛집"
        />
      </div>
    </div>
  );
}
