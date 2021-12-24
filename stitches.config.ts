import { createStitches } from '@stitches/react';

export const { globalCss, styled, getCssText, theme, keyframes } =
  createStitches({
    theme: {
      colors: {
        black: '#000',
        gray1: '#333',
        gray2: '#4F4F4F',
        gray3: '#BDBDBD',
        green1: '#3DB46D',
        red1: '#EB5757',
      },
      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '1.75rem',
      },
      fonts: {
        default: 'Inter, sans-serif',
      },
      fontWeights: {
        regular: '400',
        medium: '500',
        semi: '600',
        bold: '700',
        extraBold: '800',
      },
      letterSpacings: {
        default: '-0.035em',
      },
      radii: {
        xs: '4px',
        default: '12px',
        rounded: '16px',
      },
      shadows: {
        danger: '0px 1px 6px rgba(235, 87, 87, 0.1)',
        green: '0px 1px 6px rgba(61, 180, 109, 0.2)',
      },
      media: {
        xs: '(max-width: 600px)',
        sm: '(min-width: 600px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)',
      },
    },
  });
