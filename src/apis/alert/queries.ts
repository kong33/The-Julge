import AlertService from '@/apis/alert/Alert.service';
import { BaseQuery } from '@/apis/common.type';

const queryKeys = {
  getAlertList: (userId: string, params: BaseQuery) => ['getAlertList', { userId, params }] as const,
  putAlert: (userId: string, alertId: string) => ['putAlert', { userId, alertId }] as const
};

const queryOptions = {
  getAlertList: (userId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getAlertList(userId, params),
    queryFn: () => AlertService.getAlertList(userId, params)
  }),
  putAlert: (userId: string, alertId: string) => ({
    mutationKey: queryKeys.putAlert(userId, alertId),
    mutationFn: ({ putUserId, putAlertId }: { putUserId: string; putAlertId: string }) =>
      AlertService.putAlert(putUserId, putAlertId)
  })
};

export default queryOptions;
