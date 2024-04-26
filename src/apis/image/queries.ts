import ImageService from '@/apis/image/Image.service';
import { PostImagePayload } from '@/apis/image/image.type';

const queryKeys = {
  postImage: (name: string) => ['postImage', name] as const,
  putImage: (file: File | null) => ['putImage', { file }] as const,
  getImage: (presignedUrl: string) => ['getImage', presignedUrl] as const
};

const queryOptions = {
  postImage: (name: string) => ({
    mutationKey: queryKeys.postImage(name),
    mutationFn: (postData: PostImagePayload) => ImageService.postImage(postData)
  }),
  putImage: (file: File | null) => ({
    mutationKey: queryKeys.putImage(file),
    mutationFn: ({ putFile, putPresignedUrl }: { putFile: File; putPresignedUrl: string }) =>
      ImageService.putImage(putFile, putPresignedUrl)
  }),
  getImage: (presignedUrl: string) => ({
    queryKey: queryKeys.getImage(presignedUrl),
    queryFn: () => ImageService.getImage(presignedUrl)
  })
};

export default queryOptions;
