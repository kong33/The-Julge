import ApplicationService from '@/apis/application/Application.service';
import { PutApplicationPayload } from '@/apis/application/application.type';
import { BaseQuery } from '@/apis/common.type';

const queryKeys = {
  getApplicationListByNoticeId: (shopId: string, noticeId: string, params: BaseQuery) =>
    ['applications', { shopId, noticeId, params }] as const,
  postApplication: (shopId: string, noticeId: string) => ['postApplications', { shopId, noticeId }] as const,
  putApplication: (shopId: string, noticeId: string, applicationId: string, payload: PutApplicationPayload) =>
    ['putApplications', { shopId, noticeId, applicationId, payload }] as const,
  getApplicationListByUserId: (userId: string, params: BaseQuery) => ['applications', { userId, params }] as const
};

const queryOptions = {
  getApplicationListByNoticeId: (shopId: string, noticeId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getApplicationListByNoticeId(shopId, noticeId, params),
    queryFn: () => ApplicationService.getApplicationListByNoticeId(shopId, noticeId, params)
  }),
  postApplication: (shopId: string, noticeId: string) => ({
    mutationKey: queryKeys.postApplication(shopId, noticeId),
    mutationFn: () => ApplicationService.postApplication(shopId, noticeId)
  }),
  putApplication: (shopId: string, noticeId: string, applicationId: string, payload: PutApplicationPayload) => ({
    mutationKey: queryKeys.putApplication(shopId, noticeId, applicationId, payload),
    mutationFn: () => ApplicationService.putApplication(shopId, noticeId, applicationId, payload)
  }),
  getApplicationListByUserId: (userId: string, params: BaseQuery) => ({
    queryKey: queryKeys.getApplicationListByUserId(userId, params),
    queryFn: () => ApplicationService.getApplicationListByUserId(userId, params)
  })
};

export default queryOptions;
