type Body = {
  file: string;
};

type Item = {
  url: string;
};

type Link = {
  rel: string;
  description: string;
  method: string;
  href: string;
  body: Body;
};

export type ImageRes = {
  item: Item;
  links: Array<Link>;
};

export type PostImagePayload = {
  name: string;
};
