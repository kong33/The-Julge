/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { BaseQuery } from '@/apis/common.type';
import {
  GetNoticeListParams,
  GetNoticeListRes,
  PostNoticePayload,
  GetNoticeListByShopIdRes,
  PutNoticePayload
} from '@/apis/notice/notice.type';
import { apiRequestor, apiRequestorToken } from '@/apis/requestor';

class NoticeService {
  getNoticeList(params: GetNoticeListParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetNoticeListRes>(`/notices`, config);
  }

  getNoticeListByShopId(shopId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetNoticeListByShopIdRes>(`/shops/${shopId}/notices`, config);
  }

  postNotice(shopId: string, payload: PostNoticePayload) {
    return apiRequestorToken.post(`/shops/${shopId}/notices`, payload);
  }

  getNotice(shopId: string, noticeId: string) {
    return apiRequestor.get(`/shops/${shopId}/notices/${noticeId}`);
  }

  putNotice(shopId: string, noticeId: string, payload: PutNoticePayload) {
    return apiRequestorToken.put(`/shops/${shopId}/notices/${noticeId}`, payload);
  }
}

export default new NoticeService();
