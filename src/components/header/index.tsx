import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { Button } from '../button';
import { Dialog } from '../dialog';
import {
  Container,
  InputContainer,
  Logo,
  LogoContent,
  LogoHead,
  LogoBody,
  Field,
  Content,
  ButtonWrapper,
} from './styles';

export const Header = () => {
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleOpenDialog = () => setDialogOpened(true);

  const handleCloseDialog = () => setDialogOpened(false);

  return (
    <Container>
      <Dialog
        title='Add new photo'
        description='Add a new photo to your collection'
        opened={dialogOpened}
        onOpenedChange={setDialogOpened}
      >
        <form>
          <Field>
            <label htmlFor='label'>Label</label>
            <input
              type='text'
              name='label'
              id='label'
              placeholder='Suspendisse elit massa'
            />
          </Field>
          <Field>
            <label htmlFor='photoUrl'>Photo URL</label>
            <input
              type='url'
              name='photoUrl'
              id='photoUrl'
              placeholder='https://images.unsplash.com/photo-1837109784317341904714'
            />
          </Field>
          <ButtonWrapper>
            <Button color='gray' type='button' onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button>Submit</Button>
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
        <InputContainer>
          <IoMdSearch size={28} />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search by name'
          />
        </InputContainer>
      </Content>
      <Button onClick={handleOpenDialog}>Add photo</Button>
    </Container>
  );
};
