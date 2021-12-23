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
    },
  },

  defaultVariants: {
    color: 'green',
  },
});
