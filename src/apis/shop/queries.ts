import ShopService from '@/apis/shop/Shop.service';
import { PostShopPayload, PutShopPayload } from '@/apis/shop/shop.type';

const queryKeys = {
  postShop: (payload: PostShopPayload) => [`postShop`, payload] as const,
  getShop: (shopId: string) => [`getShop`, shopId] as const,
  putShop: (shopId: string, payload: PutShopPayload) => [`putShop`, { shopId, payload }] as const
};

const queryOptions = {
  postShop: (payload: PostShopPayload) => ({
    mutationKey: queryKeys.postShop(payload),
    mutationFn: (postData: PostShopPayload) => ShopService.postShop(postData)
  }),
  getShop: (shopId: string) => ({
    queryKey: queryKeys.getShop(shopId),
    queryFn: () => ShopService.getShop(shopId)
  }),
  putShop: (shopId: string, payload: PutShopPayload) => ({
    mutationKey: queryKeys.putShop(shopId, payload),
    mutationFn: (putData: PutShopPayload) => ShopService.putShop(shopId, putData)
  })
};

export default queryOptions;
