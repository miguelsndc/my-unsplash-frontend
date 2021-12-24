import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import { globalStyles } from 'src/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <RecoilRoot>
      <Toaster />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
