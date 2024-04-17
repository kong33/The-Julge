import { Link, NoticeItem, ShopItem, UserItem } from '@/apis/common.type';

type Status = 'pending' | 'accepted' | 'rejected' | 'canceled';

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

export type ApplicationRes = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<Item>;
  links: Array<Link>;
};
