import ImageService from '@/apis/image/Image.service';
import { PostImagePayload } from '@/apis/image/image.type';

const queryKeys = {
  postImage: (name: string) => ['postImage', name] as const,
  putImage: (file: File, presignedUrl: string) => ['putImage', { file, presignedUrl }] as const,
  getImage: (presignedUrl: string) => ['getImage', presignedUrl] as const
};

const queryOptions = {
  postImage: (name: string) => ({
    mutationKey: queryKeys.postImage(name),
    mutationFn: (postData: PostImagePayload) => ImageService.postImage(postData)
  }),
  putImage: (file: File, presignedUrl: string) => ({
    mutationKey: queryKeys.putImage(file, presignedUrl),
    mutationFn: (putFile: File) => ImageService.putImage(putFile, presignedUrl)
  }),
  getImage: (presignedUrl: string) => ({
    queryKey: queryKeys.getImage(presignedUrl),
    queryFn: () => ImageService.getImage(presignedUrl)
  })
};

export default queryOptions;
