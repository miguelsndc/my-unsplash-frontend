import { styled } from 'stitches/config';

export const Container = styled('div', {
  columnCount: 3,
  columnGap: 'clamp(10px, 5vw, 1.25rem)',
  maxWidth: 'calc(1368px + 1rem)',
  margin: '0 auto',
  marginTop: '2rem',
});

export const PostImage = styled('img', {
  breakInside: 'avoid',
  marginBottom: 40,
  display: 'block',
  borderRadius: '$default',
  width: '100%',
});
