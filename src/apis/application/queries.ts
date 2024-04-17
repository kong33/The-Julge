import ApplicationService from '@/apis/application/Application.service';
import { PutApplicationPayload } from '@/apis/application/application.type';
import { BaseQuery } from '@/apis/common.type';

const queryKeys = {
  getApplicationsByNoticeId: (shopId: string, noticeId: string, params: BaseQuery) =>
    ['applications', { shopId, noticeId, params }] as const,
  postApplication: (shopId: string, noticeId: string) => ['postApplications', { shopId, noticeId }] as const,
  putApplication: (shopId: string, noticeId: string, applicationId: string, payload: PutApplicationPayload) =>
    ['putApplications', { shopId, noticeId, applicationId, payload }] as const
};

const queryOptions = {
  getApplicationsByNoticeId: (shopId: string, noticeId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getApplicationsByNoticeId(shopId, noticeId, params),
    queryFn: () => ApplicationService.getApplicationsByNoticeId(shopId, noticeId, params)
  }),
  postApplication: (shopId: string, noticeId: string) => ({
    mutationKey: queryKeys.postApplication(shopId, noticeId),
    mutationFn: () => ApplicationService.postApplication(shopId, noticeId)
  }),
  putApplication: (shopId: string, noticeId: string, applicationId: string, payload: PutApplicationPayload) => ({
    mutationKey: queryKeys.putApplication(shopId, noticeId, applicationId, payload),
    mutationFn: () => ApplicationService.putApplication(shopId, noticeId, applicationId, payload)
  })
};

export default queryOptions;
