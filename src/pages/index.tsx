import type { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useSetRecoilState } from 'recoil';
import { User, userState } from 'src/atoms/auth';
import { Post, postsState } from 'src/atoms/posts';
import { Header } from 'src/components/header';
import { PostList } from 'src/components/post-list';
import { api } from 'src/services/api';
import { InputContainer } from 'src/styles/home';
import { debounce } from 'src/utils/debounce';

type AuthenticationResponse = {
  token: string;
  user: User;
};

const Home: NextPage = () => {
  const setPosts = useSetRecoilState(postsState);
  const setUser = useSetRecoilState(userState);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchByLabel = async (e: ChangeEvent<HTMLInputElement>) => {
    const termToBeSearched = e.target.value;

    setSearchTerm(termToBeSearched);

    const fetchMatchingPosts = debounce(async () => {
      const { data } = await api.get<Post[]>(
        `/posts/search?q=${termToBeSearched}`
      );
      setPosts(data);
    }, 750);

    fetchMatchingPosts();
  };

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
      <InputContainer>
        <IoMdSearch size={28} />
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search by name'
          onChange={handleSearchByLabel}
          value={searchTerm}
        />
      </InputContainer>
      <main>
        <PostList />
      </main>
    </div>
  );
};

export default Home;
