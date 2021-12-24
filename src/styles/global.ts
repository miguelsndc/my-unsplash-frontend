import { globalCss } from 'stitches/config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    color: '$gray1',
    fontFamily: '$default',
    fontWeight: '$regular',
    letterSpacing: '$default',
    overflowX: 'hidden',
  },
});
