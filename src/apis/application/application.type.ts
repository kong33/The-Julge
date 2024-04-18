import { Link, NoticeItem, ShopItem, Status, UserItem } from '@/apis/common.type';

type User = {
  item: UserItem;
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
  status: Status;
  createdAt: string;
  user: User;
  shop: Shop;
  notice: Notice;
};

type Item = {
  item: ItemInfo;
  links: Array<Link>;
};

export type GetApplicationListRes = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<Item>;
  links: Array<Link>;
};

export type PostApplicationRes = Item;

export type PutApplicationPayload = {
  status: Status;
};

export type PutApplicationRes = Item;

export type GetApplicationListByUserIdRes = GetApplicationListRes;
