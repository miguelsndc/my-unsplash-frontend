import { ChangeEvent, useState } from 'react';
import toast, { CheckmarkIcon, ErrorIcon } from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from 'src/atoms/auth';
import { postsState } from 'src/atoms/posts';
import { api } from 'src/services/api';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { Post } from '../../atoms/posts';
import { Input } from '../input';
import {
  Container,
  DeletePostButton,
  Overlay,
  PostContainer,
  PostImage,
  PostTitle,
  ButtonWrapper,
  CustomToast,
} from './styles';

type DeletePostResponse = {
  message: string;
  deletedPost: Post;
};

export const PostList = () => {
  const user = useRecoilValue(userState);
  const [posts, setPosts] = useRecoilState(postsState);
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [postToBeDeleted, setPostToBeDeleted] = useState<Post | null>(null);
  const [canDelete, setCanDelete] = useState(false);
  const [deleteConfirmationInput, setDeleteConfirmationInput] = useState('');

  const comparisonTerm = `${user?.name}/${postToBeDeleted?.label}`;

  const handleUndoDeletion = async (
    postToBeRestored: Post,
    postsBeforeDeletion: Post[]
  ) => {
    try {
      await api.post<Post>(`/posts`, {
        label: postToBeRestored.label,
        url: postToBeRestored.url,
      });

      setPosts(postsBeforeDeletion);
    } catch {
      toast(
        t => (
          <CustomToast>
            An error happened while recreating your post
            <button
              onClick={() => {
                handleUndoDeletion(postToBeRestored, postsBeforeDeletion);
                toast.dismiss(t.id);
              }}
            >
              Try again
            </button>
          </CustomToast>
        ),
        {
          icon: <ErrorIcon />,
        }
      );
    }
  };

  const resetDeleteConfirmation = () => {
    setPostToBeDeleted(null);
    setCanDelete(false);
    setDeleteConfirmationInput('');
    setIsDialogOpened(false);
  };

  const handleDeletePost = async (post: Post | null) => {
    if (!post) return;

    resetDeleteConfirmation();

    const {
      data: { deletedPost },
    } = await api.delete<DeletePostResponse>(`/posts/${post.id}`);

    const postsBeforeDeletion = posts.slice();

    const newPosts = posts.filter(p => p.id !== post.id);

    setPosts(newPosts);

    toast(
      t => (
        <CustomToast>
          Post deleted successfully
          <button
            onClick={() => {
              handleUndoDeletion(deletedPost, postsBeforeDeletion);
              toast.dismiss(t.id);
            }}
          >
            UNDO
          </button>
        </CustomToast>
      ),
      {
        icon: <CheckmarkIcon />,
      }
    );
  };

  const handleShowDeleteConfirmationDialog = (post: Post) => {
    setIsDialogOpened(true);
    setPostToBeDeleted(post);
  };

  const handleConfirmationInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    comparisonTerm: string
  ) => {
    const currentInput = e.target.value;
    currentInput === comparisonTerm ? setCanDelete(true) : setCanDelete(false);
    setDeleteConfirmationInput(currentInput);
  };

  return (
    <Container>
      <Dialog
        title='Are you sure ?'
        description={`Are you sure you want do delete "${postToBeDeleted?.label}" ?`}
        opened={isDialogOpened}
        onOpenedChange={setIsDialogOpened}
      >
        <span>
          Type <strong>{comparisonTerm}</strong> to proceed.
        </span>
        <Input
          type='text'
          onChange={e => handleConfirmationInputChange(e, comparisonTerm)}
          value={deleteConfirmationInput}
          placeholder='Type the necessary term to continue'
          css={{ margin: '1rem 0' }}
        ></Input>
        <ButtonWrapper>
          <Button color='gray' onClick={resetDeleteConfirmation}>
            Cancel
          </Button>
          <Button
            color='red'
            disabled={!canDelete}
            onClick={() => handleDeletePost(postToBeDeleted)}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </Dialog>
      {posts.map(post => {
        return (
          <PostContainer key={post.id}>
            {user?.id === post.userId && (
              <DeletePostButton
                onClick={() => handleShowDeleteConfirmationDialog(post)}
              >
                delete
              </DeletePostButton>
            )}
            <PostTitle>{post.label}</PostTitle>
            <Overlay></Overlay>
            <PostImage src={post.url} alt={post.label} loading='lazy' />
          </PostContainer>
        );
      })}
    </Container>
  );
};
