/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { GetApplicationsRes } from '@/apis/application/application.type';
import { BaseQuery } from '@/apis/common.type';
import { apiRequestor, apiRequestorToken } from '@/apis/requestor';

class ApplicationService {
  getApplicationsByNoticeId(shopId: string, noticeId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<GetApplicationsRes>(`/shops/${shopId}/notices/${noticeId}/applications`, config);
  }

  postApplication(shopId: string, noticeId: string) {
    return apiRequestorToken.post(`/shops/${shopId}/notices/${noticeId}/applications`);
  }
}

export default new ApplicationService();
