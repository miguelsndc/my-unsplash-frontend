import { atom } from 'recoil';

export const postsState = atom<Post[]>({
  key: 'posts',
  default: [],
});

export type Post = {
  createdAt: string;
  id: number;
  label: string;
  url: string;
  userId: number;
};
