import { atom } from 'recoil';
import { Post } from 'src/components/header';

export const postsState = atom<Post[]>({
  key: 'posts',
  default: [],
});
