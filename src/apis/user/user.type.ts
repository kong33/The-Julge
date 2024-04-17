import { Link, UserType } from '@/apis/common.type';

type Item = {
  email: string;
  password: string;
  type: UserType;
};

export type PostUserPayload = Item;

export type PostUserRes = {
  item: Item;
  links: Array<Link>;
};
