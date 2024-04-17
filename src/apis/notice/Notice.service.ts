/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { apiRequestor, apiRequestorToken } from '@/apis/requestor';

import { BaseParams, GetNoticesParams, GetNotices, BaseNotices, PostNoticePayload } from './notice.type';

class NoticeService {
  getNotices(params: GetNoticesParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetNotices>(`/notices`, config);
  }

  getNoticesByShopId(shopId: string, params: BaseParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<BaseNotices>(`/shops/${shopId}/notices`, config);
  }

  postNoticeByShopId(shopId: string, payload: PostNoticePayload) {
    return apiRequestorToken.post(`/shops/${shopId}/notices`, payload);
  }

  getNoticeByNoticeId(shopId: string, noticeId: string) {
    return apiRequestor.get(`/shops/${shopId}/notices/${noticeId}`);
  }
}

export default new NoticeService();
