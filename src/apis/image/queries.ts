import ImageService from '@/apis/image/Image.service';
import { PostImage } from '@/apis/image/image.type';

const queryKeys = {
  postImage: (name: string) => ['postImages', name] as const
};

const queryOptions = {
  postImage: (name: string) => ({
    mutationKey: queryKeys.postImage(name),
    mutationFn: (postData: PostImage) => ImageService.postImage(postData)
  })
};

export default queryOptions;
