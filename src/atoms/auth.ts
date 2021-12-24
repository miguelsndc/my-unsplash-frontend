import { atom } from 'recoil';

export type User = {
  id: number;
  email: string;
  githubId: number;
  photoUrl: string;
  name: string;
  createdAt: string;
};

export const userState = atom<User | null>({
  key: 'auth',
  default: null,
});

export const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;
