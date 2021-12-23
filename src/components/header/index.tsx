import { IoMdSearch } from 'react-icons/io';
import { Button } from '../button';
import {
  Container,
  InputContainer,
  Logo,
  LogoContent,
  LogoHead,
  LogoBody,
  Content,
} from './styles';

export const Header = () => {
  return (
    <Container>
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
      <Button>Add photo</Button>
    </Container>
  );
};
