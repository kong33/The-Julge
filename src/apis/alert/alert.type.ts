import { ApplicationItem, Link, NoticeItem, Result, ShopItem } from '@/apis/common.type';

type Application = {
  item: ApplicationItem;
  href: string;
};

type Shop = {
  item: ShopItem;
  href: string;
};

type Notice = {
  item: NoticeItem;
  href: string;
};

type ItemInfo = {
  id: string;
  createdAt: string;
  result: Result;
  read: boolean;
  application: Application;
  shop: Shop;
  notice: Notice;
  links: Array<Link>;
};

type Item = {
  item: ItemInfo;
};

export type GetAlertListRes = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<Item>;
  links: Array<Link>;
};

export type PutAlertRes = {
  offset: number;
  limit: number;
  items: Array<Item>;
  links: Array<Link>;
};
