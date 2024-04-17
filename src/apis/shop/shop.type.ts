import { Link, ShopInfo } from '@/apis/common.type';

type ItemInfo = {
  id: string;
  email: string;
  type: 'employer' | 'employee';
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
};

type User = {
  item: ItemInfo;
  href: string;
};

export type PostShopPayload = ShopInfo;

type Item = PostShopPayload & {
  user: User;
};

export type Shop = {
  item: Item;
  links: Array<Link>;
};
