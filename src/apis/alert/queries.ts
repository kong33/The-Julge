import AlertService from '@/apis/alert/Alert.service';
import { BaseQuery } from '@/apis/common.type';

const queryKeys = {
  getAlerts: (userId: string, params: BaseQuery) => ['getUserAlerts', { userId, params }] as const
};

const queryOptions = {
  getAlerts: (userId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getAlerts(userId, params),
    queryFn: () => AlertService.getAlerts(userId, params)
  })
};

export default queryOptions;
