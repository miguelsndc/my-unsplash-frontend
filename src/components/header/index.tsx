import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { RegisterOptions, useForm } from 'react-hook-form';
import { IoMdAdd } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import {
  Container,
  Logo,
  LogoContent,
  LogoHead,
  LogoBody,
  Field,
  Content,
  ButtonWrapper,
  ErrorMessage,
  Profile,
  GithubLink,
} from './styles';
import { api } from 'src/services/api';
import { userState, signInUrl } from 'src/atoms/auth';
import { Post, postsState } from 'src/atoms/posts';

type PhotoFormData = {
  label: string;
  photoUrl: string;
};

class PhotoFormValidation {
  static label(required = false): RegisterOptions {
    return {
      required: {
        value: required,
        message: 'Label is required to add a new photo.',
      },
      minLength: {
        value: 3,
        message: 'Label should have at least 3 characters.',
      },
    };
  }

  static photoUrl(required = false): RegisterOptions {
    return {
      required: {
        value: required,
        message: 'A Photo url is required to add a new photo',
      },
    };
  }
}

export const Header = () => {
  const [dialogOpened, setDialogOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhotoFormData>();

  const user = useRecoilValue(userState);
  const setPosts = useSetRecoilState(postsState);

  const handleOpenDialog = () => setDialogOpened(true);

  const handleCloseDialog = () => setDialogOpened(false);

  const handleNewPhoto = async (data: PhotoFormData) => {
    setIsLoading(true);
    try {
      const { data: newPost } = await api.post<Post>('/posts', {
        label: data.label,
        url: data.photoUrl,
      });

      toast.success('Post added successfully!');
      reset();
      setDialogOpened(false);

      setPosts(prevPosts => [newPost, ...prevPosts]);
    } catch (e) {
      const error = e as Error;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Dialog
        title='Add new photo'
        description='Add a new photo to your collection'
        opened={dialogOpened}
        onOpenedChange={setDialogOpened}
      >
        <form onSubmit={handleSubmit(handleNewPhoto)}>
          {error && (
            <ErrorMessage css={{ margin: '1rem 0' }}>{error}</ErrorMessage>
          )}
          <Field>
            <label htmlFor='label'>Label</label>
            <Input
              type='text'
              id='label'
              placeholder='Suspendisse elit massa'
              {...register('label', PhotoFormValidation.label(true))}
            />
            {errors.label && (
              <ErrorMessage>{errors.label.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <label htmlFor='photoUrl'>Photo URL</label>
            <Input
              type='url'
              id='photoUrl'
              placeholder='https://images.unsplash.com/photo-1837109784317341904714'
              {...register('photoUrl', PhotoFormValidation.photoUrl(true))}
            />
            {errors.photoUrl && (
              <ErrorMessage>{errors.photoUrl.message}</ErrorMessage>
            )}
          </Field>
          <ButtonWrapper>
            <Button color='gray' type='button' onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button disabled={isLoading}>Submit</Button>
          </ButtonWrapper>
        </form>
      </Dialog>
      <Content>
        <Logo>
          <LogoContent>
            <LogoHead />
            <LogoBody />
          </LogoContent>
          <div>
            <h1>my unsplash</h1>
            <h2>devchallenges.io</h2>
          </div>
        </Logo>
      </Content>
      {user ? (
        <Profile>
          <Button onClick={handleOpenDialog} rounded aria-label='add new photo'>
            <IoMdAdd size={24} />
          </Button>

          <Image src={user.photoUrl} alt={user.name} width={56} height={56} />
        </Profile>
      ) : (
        <GithubLink href={signInUrl}>
          <BsGithub size={24} />
          login with github
        </GithubLink>
      )}
    </Container>
  );
};
