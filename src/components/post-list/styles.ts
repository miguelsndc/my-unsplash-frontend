import { styled } from 'stitches/config';

export const Container = styled('div', {
  columnCount: 3,
  columnGap: 30,
  maxWidth: 'calc(1368px + 1rem)',
  margin: '0 auto',
  marginTop: '2rem',
  padding: '1rem',
});

export const PostImage = styled('img', {
  breakInside: 'avoid',
  marginBottom: 40,
  display: 'block',
  borderRadius: '$default',
  width: '100%',
});

export const Overlay = styled('div', {
  background: '$black',
  inset: 0,
  borderRadius: '$default',
  position: 'absolute',
  opacity: 0.25,
});

export const DeletePostButton = styled('button', {
  position: 'absolute',
  top: 15,
  right: 15,
  borderRadius: 38,
  padding: '0.5rem 1rem',
  color: '#fff',
  background: '$red1',
  border: '2px solid $red1',
  fontFamily: '$default',
  cursor: 'pointer',
  transition: 'filter .2s',
  '&:hover': {
    filter: 'brightness(0.9)',
  },
  zIndex: 3,
});

export const PostTitle = styled('h1', {
  position: 'absolute',
  bottom: 30,
  left: 20,
  color: '#fff',
  fontSize: '$lg',
  fontWeight: '$semi',
  zIndex: 3,
});

export const PostContainer = styled('div', {
  position: 'relative',
  [`& ${DeletePostButton}`]: {
    display: 'none',
  },
  '&:hover': {
    [`& ${DeletePostButton}`]: {
      display: 'block',
    },
  },
});

export const ButtonWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
});

export const CustomToast = styled('span', {
  button: {
    textTransform: 'uppercase',
    border: 'none',
    padding: '0.5rem',
    fontFamily: '$default',
    borderRadius: '$default',
    cursor: 'pointer',
    marginLeft: '0.5rem',
    transition: 'filter .2s',
    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
});
