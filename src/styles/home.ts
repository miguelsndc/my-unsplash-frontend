import { styled } from 'stitches/config';

export const InputContainer = styled('div', {
  border: '1px solid $gray3',
  borderRadius: '$default',
  padding: '0.75rem',
  display: 'flex',
  margin: 'auto',
  maxWidth: 400,
  width: '95vw',
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
    width: '100%',
  },

  svg: {
    fill: '$gray3',
    marginRight: '0.85rem',
  },
});
