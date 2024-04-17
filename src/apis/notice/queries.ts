import NoticeService from '@/apis/notice/Notice.service';

import { BaseParams, GetNoticesParams } from './notice.type';

const queryKeys = {
  // postImage: (name: string) => ['postImages', name] as const
  getNotices: (params: GetNoticesParams) => ['getNotices', params] as const,
  getNoticesByShopId: (shopId: string, params: BaseParams) => ['getNoticesByShopId', { shopId, params }] as const
};

const queryOptions = {
  // postImage: (name: string) => ({
  //   mutationKey: queryKeys.postImage(name),
  //   mutationFn: (postData: PostImage) => ImageService.postImage(postData)
  // })

  getNotices: (params: GetNoticesParams) => ({
    queryKey: queryKeys.getNotices(params),
    queryFn: () => NoticeService.getNotices(params)
  }),
  getNoticesByShopId: (shopId: string, params: BaseParams) => ({
    queryKey: queryKeys.getNoticesByShopId(shopId, params),
    queryFn: () => NoticeService.getNoticesByShopId(shopId, params)
  })
};

export default queryOptions;
