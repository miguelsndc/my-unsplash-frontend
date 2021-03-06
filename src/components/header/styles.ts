import { styled } from 'stitches/config';

export const Container = styled('header', {
  width: '90vw',
  maxWidth: 'calc(1368px + 1rem)',
  padding: '1rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  h1: {
    fontSize: '$lg',
    fontWeight: '$extraBold',
    whiteSpace: 'nowrap',
    color: '$gray1',
    textTransform: 'capitalize',
    lineHeight: 0.9,
  },
  h2: {
    fontSize: '$sm',
    fontWeight: '$medium',
  },

  '@media screen and (max-width: 600px)': {
    'h1, h2': {
      display: 'none',
    },
  },
});

export const LogoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25rem',
});

export const LogoHead = styled('div', {
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '$xs',
  background: '$gray1',
});

export const LogoBody = styled('div', {
  width: '2rem',
  height: '0.75rem',
  borderRadius: '$xs',
  background: '$gray1',
});

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
});

export const Field = styled('div', {
  '& + &': {
    marginTop: '0.75rem',
  },
  label: {
    display: 'block',
    fontWeight: '$medium',
    fontSize: '$md',
    marginBottom: '0.5rem',
  },
});

export const ButtonWrapper = styled('div', {
  marginTop: '1.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '1rem',
});

export const ErrorMessage = styled('span', {
  display: 'block',
  color: '$red1',
  marginTop: '0.45rem',
  fontSize: '$sm',
});

export const GithubLink = styled('a', {
  textDecoration: 'none',
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: '$gray1',
  color: '#fff',
  fontWeight: '$medium',
  borderRadius: '$default',
  padding: '0.75rem 1.5rem',
  transition: 'background .2s',
  '&:hover': {
    background: '$black',
  },
});

export const Profile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  img: {
    borderRadius: '50%',
  },
});
