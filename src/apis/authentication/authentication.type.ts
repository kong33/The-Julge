import { Link, UserItem } from '@/apis/common.type';

export type PostAuthenticationPayload = {
  email: string;
  password: string;
};

type User = UserItem & {
  href: string;
};

type Item = {
  token: string;
  user: User;
};

export type PostAuthenticationRes = {
  item: Item;
  links: Array<Link>;
};
