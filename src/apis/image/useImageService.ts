import { useMutation } from '@tanstack/react-query';

import { Image, PostImagePayload } from '@/apis/image/image.type';
import queryOptions from '@/apis/image/queries';

/**
 * Presigned URL을 생성합니다.
 * @param name required; string
 * @returns \{item: {url: string}, links: [rel: string; description: string; method: string; href: string; body: {file: string};]}
 */

// eslint-disable-next-line import/prefer-default-export
export function usePostImage({ name }: PostImagePayload) {
  const { mutate, data: res } = useMutation(queryOptions.postImage(name));
  const data: Image = res?.data;
  return { mutate, data };
}
