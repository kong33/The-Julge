import { BaseQuery, Link } from '@/apis/common.type';

type ShopItem = {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
};

type Shop = {
  item: ShopItem;
  href: string;
};

type ItemInfo = {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
};

export type Item = {
  item: ItemInfo;
  links: Array<Link>;
};

export type BaseNoticesRes = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<Item>;
  links: Array<Link>;
};

export type GetNoticesRes = BaseNoticesRes & {
  address: Array<string>;
  keyword?: string;
};

export type GetNoticesParams = BaseQuery & {
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: 'time' | 'pay' | 'hour' | 'shop';
};

export type PostNoticePayload = {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
};
