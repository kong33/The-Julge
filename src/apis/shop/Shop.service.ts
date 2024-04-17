/* eslint-disable class-methods-use-this */
import { apiRequestorToken } from '@/apis/requestor';
import { PostShopPayload } from '@/apis/shop/shop.type';

class ShopService {
  postShop(payload: PostShopPayload) {
    return apiRequestorToken.post(`/shops`, payload);
  }
}

export default new ShopService();
