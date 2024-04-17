/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { apiRequestor } from '@/apis/requestor';

import { GetNoticesParams, Notices } from './notice.type';

class NoticeService {
  // postImage(payload: PostImage) {
  //   return apiRequestorToken.post('/images', payload);
  // }

  getNotices(params: GetNoticesParams) {
    const config: AxiosRequestConfig = { params };
    return apiRequestor.get<Notices>(`/notices`, config);
  }
}

export default new NoticeService();
