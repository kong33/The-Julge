import { Address as AddressType, Category } from '@/apis/common.type';

export const addressList: AddressType[] = [
  '서울시 종로구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 광진구',
  '서울시 동대문구',
  '서울시 중랑구',
  '서울시 성북구',
  '서울시 강북구',
  '서울시 도봉구',
  '서울시 노원구',
  '서울시 은평구',
  '서울시 서대문구',
  '서울시 마포구',
  '서울시 양천구',
  '서울시 강서구',
  '서울시 구로구',
  '서울시 금천구',
  '서울시 영등포구',
  '서울시 동작구',
  '서울시 관악구',
  '서울시 서초구',
  '서울시 강남구',
  '서울시 송파구',
  '서울시 강동구'
];

export const categoryList: Category[] = ['한식', '중식', '일식', '양식', '분식', '카페', '편의점', '기타'];

export const a = 1;
//  lint 에러를 막기 위한 임시 코드

/**
 * pageList
 * @param shop 사장님 가게 상세
 * @param shopRegister 사장님 가게 등록
 * @param shopDetail (shopId) 사장님 가게 상세
 * @param shopEdit (shopId) 사장님 가게 편집
 * @param shopNoticeRegister (shopId) 사장님 공고 등록
 * @param shopNoticeDetail (shopId, noticeId) 사장님 공고 상세
 * @param shopNoticeEdit (shopId, noticeId) 사장님 공고 편집
 * @param login 로그인
 * @param signup 회원가입
 * @param home 일반회원 공고 리스트
 * @param userNoticeDetail (shopId, noticeId)일반회원 공고 상세
 * @param user 일반회원 프로필
 * @param userEdit 일반회원 프로필 편집
 */

export const pageList = {
  shop: () => `/shop`,
  shopRegister: () => `/shop/register`,
  shopDetail: (shopId: string) => `/shop/${shopId}`,
  shopEdit: (shopId: string) => `/shop/${shopId}/edit`,
  shopNoticeRegister: (shopId: string) => `/shop/${shopId}/register`,
  shopNoticeDetail: (shopId: string, noticeId: string) => `/shop/${shopId}/${noticeId}`,
  shopNoticeEdit: (shopId: string, noticeId: string) => `/shop/${shopId}/${noticeId}/edit`,
  login: () => `/login`,
  signup: () => `/signup`,
  home: () => `/`,
  userNoticeDetail: (shopId: string, noticeId: string) => `/notice/${shopId}/${noticeId}`,
  user: () => `/user`,
  userEdit: () => `/user/edit`,
  page404: () => `/404`,
  search: () => '/search'
};

export const defaultLimit = 3;
