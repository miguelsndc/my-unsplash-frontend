import { ReactNode } from 'react';
import {
  DialogRoot,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogChildren,
} from './styles';

type DialogProps = {
  opened: boolean;
  onOpenedChange: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
};

export const Dialog = ({
  children,
  description,
  onOpenedChange,
  opened,
  title,
}: DialogProps) => {
  return (
    <DialogRoot open={opened} onOpenChange={onOpenedChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogChildren>{children}</DialogChildren>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
};
