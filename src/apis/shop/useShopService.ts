import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

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

export function usePostShop(payload: PostShopPayload) {
  const res = useMutation(queryOptions.postShop(payload));
  return selectData<ShopRes>(res);
}

/**
 * 특정 가게의 정보를 조회합니다.
 * @param shopId required; string
 * @returns \{
  item: Item;
  links: Array<Link>;
}
 */

export function useGetShopByShopId(shopId: string) {
  const res = useSuspenseQuery(queryOptions.getShopByShopId(shopId));
  return selectData<ShopRes>(res);
}
