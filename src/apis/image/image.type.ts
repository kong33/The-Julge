import { Link } from '@/apis/common.type';

export type PostImagePayload = {
  name: string;
};

type Item = {
  url: string;
};

export type PostImageRes = {
  item: Item;
  links: Array<Link>;
};
