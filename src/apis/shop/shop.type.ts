import { Link, ShopInfo, ShopItem } from '@/apis/common.type';

type UserItem = {
  id: string;
  email: string;
  type: 'employer' | 'employee';
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
};

type User = {
  item: UserItem;
  href: string;
};

export type PostShopPayload = ShopInfo;

type Item = ShopItem & {
  user: User;
};

export type ShopRes = {
  item: Item;
  links: Array<Link>;
};
