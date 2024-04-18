import { Link, ShopInfo, ShopItem, UserItem } from '@/apis/common.type';

type User = {
  item: UserItem;
  href: string;
};

type Item = ShopItem & {
  user: User;
};

export type GetShopRes = {
  item: Item;
  links: Array<Link>;
};

export type PostShopPayload = ShopInfo;

export type PostShopRes = GetShopRes;

export type PutShopPayload = ShopInfo;

export type PutShopRes = GetShopRes;
