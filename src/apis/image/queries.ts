import ImageService from '@/apis/image/Image.service';
import { PostImagePayload } from '@/apis/image/image.type';

const queryKeys = {
  postImage: (name: string) => ['postImages', name] as const
};

const queryOptions = {
  postImage: (name: string) => ({
    mutationKey: queryKeys.postImage(name),
    mutationFn: (postData: PostImagePayload) => ImageService.postImage(postData)
  })
};

export default queryOptions;
