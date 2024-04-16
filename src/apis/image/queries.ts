import ImageService from '@/apis/image/Image.service';

const queryKeys = {
  postImages: (name: string) => ['postImages', name] as const
};

const queryOptions = {
  postImages: (name: string) => ({
    mutationKey: queryKeys.postImages(name),
    mutationFn: () => ImageService.postImages({ name })
  })
};

export default queryOptions;
