import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import queryOptions from '@/apis/shop/queries';
import { PostShopPayload, PutShopPayload, GetShopRes, PostShopRes, PutShopRes } from '@/apis/shop/shop.type';
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
  return selectData<PostShopRes>(res);
}

/**
 * 특정 가게의 정보를 조회합니다.
 * @param shopId required; string
 * @returns \{
  item: Item;
  links: Array<Link>;
}
 */

export function useGetShop(shopId: string) {
  const res = useSuspenseQuery(queryOptions.getShop(shopId));
  return selectData<GetShopRes>(res);
}

/**
 * 특정 가게의 정보를 수정합니다.
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

export function usePutShop(shopId: string, payload: PutShopPayload) {
  const res = useMutation(queryOptions.putShop(shopId, payload));
  return selectData<PutShopRes>(res);
}
