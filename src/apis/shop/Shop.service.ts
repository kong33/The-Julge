/* eslint-disable class-methods-use-this */
import { apiRequestor, apiRequestorToken } from '@/apis/requestor';
import { PostShopPayload } from '@/apis/shop/shop.type';

class ShopService {
  postShop(payload: PostShopPayload) {
    return apiRequestorToken.post(`/shops`, payload);
  }

  getShopByShopId(shopId: string) {
    return apiRequestor.get(`/shops/${shopId}`);
  }
}

export default new ShopService();
