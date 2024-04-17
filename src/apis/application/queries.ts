import ApplicationService from '@/apis/application/Application.service';
import { BaseQuery } from '@/apis/common.type';

const queryKeys = {
  getApplicationsByNoticeId: (shopId: string, noticeId: string, params: BaseQuery) =>
    ['applications', { shopId, noticeId, params }] as const
};

const queryOptions = {
  getApplicationsByNoticeId: (shopId: string, noticeId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getApplicationsByNoticeId(shopId, noticeId, params),
    queryFn: () => ApplicationService.getApplicationsByNoticeId(shopId, noticeId, params)
  })
};

export default queryOptions;
