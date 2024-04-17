import ShopService from '@/apis/shop/Shop.service';
import { PostShopPayload } from '@/apis/shop/shop.type';

const queryKeys = {
  postShop: (payload: PostShopPayload) => [`postShop`, payload] as const
};

const queryOptions = {
  postShop: (payload: PostShopPayload) => ({
    mutationKey: queryKeys.postShop(payload),
    mutationFn: (postData: PostShopPayload) => ShopService.postShop(postData)
  })
};

export default queryOptions;
