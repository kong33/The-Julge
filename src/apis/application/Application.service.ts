/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import {
  GetApplicationListByUserIdRes,
  GetApplicationListRes,
  PutApplicationPayload
} from '@/apis/application/application.type';
import { BaseQuery } from '@/apis/common.type';
import { apiRequestor, apiRequestorToken } from '@/apis/requestor';

class ApplicationService {
  getApplicationListByNoticeId(shopId: string, noticeId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetApplicationListRes>(`/shops/${shopId}/notices/${noticeId}/applications`, config);
  }

  postApplication(shopId: string, noticeId: string) {
    return apiRequestorToken.post(`/shops/${shopId}/notices/${noticeId}/applications`);
  }

  putApplication(shopId: string, noticeId: string, applicationId: string, payload: PutApplicationPayload) {
    return apiRequestorToken.put(`/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`, payload);
  }

  getApplicationListByUserId(userId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestorToken.get<GetApplicationListByUserIdRes>(`/users/${userId}/applications`, config);
  }
}

export default new ApplicationService();
