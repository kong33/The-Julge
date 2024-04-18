/* eslint-disable class-methods-use-this */
import { AxiosRequestConfig } from 'axios';

import { BaseQuery } from '@/apis/common.type';
import { apiRequestorToken } from '@/apis/requestor';

class AlertService {
  getAlerts(userId: string, params: BaseQuery) {
    const config: AxiosRequestConfig = { params };
    return apiRequestorToken.get(`/users/${userId}/alerts`, config);
  }

  putAlert(userId: string, alertId: string) {
    return apiRequestorToken.put(`/users/${userId}/alerts/${alertId}`);
  }
}

export default new AlertService();
