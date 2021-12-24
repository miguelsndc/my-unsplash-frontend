import { styled } from 'stitches/config';

export const Button = styled('button', {
  border: 'none',
  background: 'none',
  color: '#fff',
  borderRadius: '$default',
  padding: '1rem 1.25rem',
  fontFamily: '$default',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontSize: '$md',
  transition: 'filter .2s',

  '&:hover': {
    filter: 'brightness(0.95)',
  },

  variants: {
    color: {
      green: {
        backgroundColor: '$green1',
        boxShadow: '$green',
      },
      red: {
        backgroundColor: '$red1',
        boxShadow: '$danger',
      },
      gray: {
        backgroundColor: '#fff',
        color: '$gray3',
      },
    },
  },

  defaultVariants: {
    color: 'green',
  },
});
