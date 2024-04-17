import { useMutation } from '@tanstack/react-query';

import queryOptions from '@/apis/shop/queries';
import { PostShopPayload, ShopRes } from '@/apis/shop/shop.type';
import selectData from '@/apis/utils';

/**
 * 가게를 등록합니다.
 * @param payload \{
  name: string;
  category: Category;
  address1: Address;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}
 * @returns \{
  item: Item;
  links: Array<Link>;
}
 */

// eslint-disable-next-line import/prefer-default-export
export function usePostShop(payload: PostShopPayload) {
  const res = useMutation(queryOptions.postShop(payload));
  return selectData<ShopRes>(res);
}
