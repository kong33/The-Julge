/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { ApplicationRes } from '@/apis/application/application.type';
import { BaseQuery } from '@/apis/common.type';
import { apiRequestor } from '@/apis/requestor';

class ApplicationService {
  getApplicationsByNoticeId(shopId: string, noticeId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<ApplicationRes>(`/shops/${shopId}/notices/${noticeId}/applications`, config);
  }
}

export default new ApplicationService();
