import { useMutation } from '@tanstack/react-query';

import queryOptions from './queries';

// eslint-disable-next-line import/prefer-default-export
export function usePostImages({ name }: { name: string }) {
  return useMutation(queryOptions.postImages(name));
}
