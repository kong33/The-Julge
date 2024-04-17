/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { BaseQuery } from '@/apis/common.type';
import { GetNoticesParams, GetNoticesRes, BaseNoticesRes, PostNoticePayload } from '@/apis/notice/notice.type';
import { apiRequestor, apiRequestorToken } from '@/apis/requestor';

class NoticeService {
  getNotices(params: GetNoticesParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetNoticesRes>(`/notices`, config);
  }

  getNoticesByShopId(shopId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<BaseNoticesRes>(`/shops/${shopId}/notices`, config);
  }

  postNoticeByShopId(shopId: string, payload: PostNoticePayload) {
    return apiRequestorToken.post(`/shops/${shopId}/notices`, payload);
  }

  getNoticeByNoticeId(shopId: string, noticeId: string) {
    return apiRequestor.get(`/shops/${shopId}/notices/${noticeId}`);
  }

  putNoticeByNoticeId(shopId: string, noticeId: string, payload: PostNoticePayload) {
    return apiRequestorToken.put(`/shops/${shopId}/notices/${noticeId}`, payload);
  }
}

export default new NoticeService();
