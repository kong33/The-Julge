export type PostProps = {
  name: string;
  id: string;
  startedAt: string;
  workhour: number;
  address: string;
  hourlyPay: number;
  originalHourlyPay: number;
  imageUrl: string;
  closed: boolean;
  shopId: string;
};

export type PostTagprops = {
  closed: boolean;
  hourlyPay: number;
  originalHourlyPay: number;
};

export type PostData = {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
    };
    href: string;
  };
};

export type PostListProps = {
  datas: PostData[];
};
