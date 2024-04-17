import { Link, ShopInfo, ShopItem, UserItem } from '@/apis/common.type';

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
