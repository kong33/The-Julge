import ShopService from '@/apis/shop/Shop.service';
import { PostShopPayload } from '@/apis/shop/shop.type';

const queryKeys = {
  postShop: (payload: PostShopPayload) => [`postShop`, payload] as const,
  getShopByShopId: (shopId: string) => [`getShop`, shopId] as const,
  putShop: (shopId: string, payload: PostShopPayload) => [`putShop`, { shopId, payload }] as const
};

const queryOptions = {
  postShop: (payload: PostShopPayload) => ({
    mutationKey: queryKeys.postShop(payload),
    mutationFn: (postData: PostShopPayload) => ShopService.postShop(postData)
  }),
  getShopByShopId: (shopId: string) => ({
    queryKey: queryKeys.getShopByShopId(shopId),
    queryFn: () => ShopService.getShopByShopId(shopId)
  }),
  putShop: (shopId: string, payload: PostShopPayload) => ({
    mutationKey: queryKeys.putShop(shopId, payload),
    mutationFn: (putData: PostShopPayload) => ShopService.putShop(shopId, putData)
  })
};

export default queryOptions;
