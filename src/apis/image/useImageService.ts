import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { PostImageRes, PostImagePayload } from '@/apis/image/image.type';
import queryOptions from '@/apis/image/queries';
import { selectData } from '@/apis/utils';

/**
 * Presigned URL을 생성합니다.
 * @param name required; \{
  name: string;
}
 * @returns \{
  item: Item;
  links: \{
  rel: string;
  description: string;
  method: string;
  href: string;
  body: \{
  file: string;
};
};
}
 */

export function usePostImage({ name }: PostImagePayload) {
  const res = useMutation(queryOptions.postImage(name));
  return selectData<PostImageRes>(res);
}

/**
 * S3로 이미지를 업로드합니다.
 * @param file required; File
 * @param presignedUrl required; string
 * @returns  */

export function usePutImage(file: File, presignedUrl: string) {
  return useMutation(queryOptions.putImage(file, presignedUrl));
}

/**
 * Presigned URL을 조회합니다.
 * @param presignedUrl required; string
 * @returns  */

export function useGetImage(presignedUrl: string) {
  return useSuspenseQuery(queryOptions.getImage(presignedUrl));
}
