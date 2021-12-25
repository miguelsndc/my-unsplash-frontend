import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { User, userState } from 'src/atoms/auth';
import { postsState } from 'src/atoms/posts';
import { Header, Post } from 'src/components/header';
import { PostList } from 'src/components/post-list';
import { api } from 'src/services/api';

type AuthenticationResponse = {
  token: string;
  user: User;
};

const Home: NextPage = () => {
  const setPosts = useSetRecoilState(postsState);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    api.get<Post[]>('/posts').then(({ data }) => {
      setPosts(data);
    });
  }, [setPosts]);

  useEffect(() => {
    const url = window.location.href;

    const hasGithubCode = url.includes('?code=');

    const signIn = async (gitCode: string) => {
      const { data } = await api.post<AuthenticationResponse>(
        '/users/authenticate',
        {
          code: gitCode,
        }
      );

      const { token, user } = data;

      localStorage.setItem('@miguelsndc/my-unsplash:token', token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(user);
    };

    if (hasGithubCode) {
      const [urlWithoutCode, code] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      signIn(code);
    }
  }, [setUser]);

  useEffect(() => {
    const token = localStorage.getItem('@miguelsndc/my-unsplash:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('/users/profile').then(res => {
        setUser(res.data);
      });
    }
  }, [setUser]);

  return (
    <div>
      <Header />
      <main>
        <PostList />
      </main>
    </div>
  );
};

export default Home;
