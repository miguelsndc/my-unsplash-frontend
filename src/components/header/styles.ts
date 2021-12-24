import { styled } from 'stitches/config';

export const Container = styled('header', {
  width: '75%',
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

export const InputContainer = styled('div', {
  border: '1px solid $gray3',
  borderRadius: '$default',
  padding: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',

  '&:focus-within': {
    outline: 'auto',
  },

  input: {
    background: 'none',
    border: 'none',
    fontFamily: '$default',
    fontSize: '$md',
    outline: 'none',
  },

  svg: {
    fill: '$gray3',
    marginRight: '0.85rem',
  },
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
  input: {
    background: 'none',
    fontFamily: '$default',
    fontSize: '$md',
    padding: '0.9rem 1.15rem',
    borderRadius: '$default',
    border: '1px solid $gray2',
    display: 'block',
    width: '100%',
    '&::placeholder': {
      color: '$gray3',
    },
  },
});

export const ButtonWrapper = styled('div', {
  marginTop: '1.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '1rem',
});
