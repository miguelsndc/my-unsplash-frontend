import { useRecoilValue } from 'recoil';
import { postsState } from 'src/atoms/posts';
import { Container, PostImage } from './styles';

export const PostList = () => {
  const posts = useRecoilValue(postsState);

  return (
    <Container>
      {posts.map(post => {
        return <PostImage key={post.id} src={post.url} alt={post.label} />;
      })}
    </Container>
  );
};
