import { Link, ShopInfo, UserType } from '@/apis/common.type';

export type PostUserPayload = {
  email: string;
  password: string;
  type: UserType;
};

type Item = {
  id: string;
  type: UserType;
  email: string;
};

export type PostUserRes = {
  item: Item;
  links: Array<Link>;
};

type Shop = {
  item: ShopInfo;
  href: string;
};

export type GetUserRes = {
  item: Item & {
    shop: Shop;
  };
  links: Array<Link>;
};
