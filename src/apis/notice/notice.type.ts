type Link = {
  rel: string;
  description: string;
  method: string;
  href: string;
};

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
  startsAt: string | Date;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
};

type Item = {
  item: ItemInfo;
  links: Array<Link>;
};

export type Notices = {
  offset: number;
  limit: number;
  address: Array<string>;
  count: number;
  hasNext: boolean;
  items: Array<Item>;
  keyword?: string;
  links: Array<Link>;
};

export type GetNoticesParams = {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: 'time' | 'pay' | 'hour' | 'shop';
};
