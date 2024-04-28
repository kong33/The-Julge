import { atom } from 'jotai';

import { PostAuthenticationRes } from '@/apis/authentication/authentication.type';

export const userInfoAtom = atom<PostAuthenticationRes | null>(null);
export const userIdAtom = atom<string | null>(null);
