import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled, keyframes } from 'stitches/config';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$black',
  opacity: 0.25,
  position: 'fixed',
  inset: 0,
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: '$default',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 600,
  zIndex: 9,
  maxHeight: '85vh',
  padding: '1.25rem 1.75rem',
  '&:focus': { outline: 'none' },
  '&[data-state="open"]': {
    animation: `${fadeIn} .15s`,
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} .15s`,
  },
});

const StyledTitle = styled(DialogPrimitive.Title, {
  fontSize: '$lg',
  fontWeight: '$medium',
  textTransform: 'capitalize',
});

const StyledDescription = styled(DialogPrimitive.Description, {
  color: '$gray2',
  fontSize: '$sm',
  marginTop: 5,
});

const StyledChildren = styled('div', {
  marginTop: '0.75rem',
});

export const DialogChildren = StyledChildren;
export const DialogRoot = DialogPrimitive.Root;
export const DialogContent = StyledContent;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogOverlay = StyledOverlay;
export const DialogPortal = DialogPrimitive.Portal;
