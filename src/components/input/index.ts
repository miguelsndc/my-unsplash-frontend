import { styled } from 'stitches/config';

export const Input = styled('input', {
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
});
