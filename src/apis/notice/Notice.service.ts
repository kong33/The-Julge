/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { apiRequestor } from '@/apis/requestor';

import { BaseParams, GetNoticesParams, GetNotices, BaseNotices } from './notice.type';

class NoticeService {
  // postImage(payload: PostImage) {
  //   return apiRequestorToken.post('/images', payload);
  // }

  getNotices(params: GetNoticesParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetNotices>(`/notices`, config);
  }

  getNoticesByShopId(shopId: string, params: BaseParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<BaseNotices>(`/shops/${shopId}/notices`, config);
  }
}

export default new NoticeService();
