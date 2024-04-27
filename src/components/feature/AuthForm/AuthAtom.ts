import { atom } from 'jotai';

import { PostAuthenticationRes } from '@/apis/authentication/authentication.type';

const userInfoAtom = atom<PostAuthenticationRes | null>(null);
export default userInfoAtom;
