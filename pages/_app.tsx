import type { AppProps } from 'next/app';

import '@/styles/globals.scss';
import Modals from '@/components/Modal/ModalGroup';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Modals.Root>
      <Component {...pageProps} />
    </Modals.Root>
  );
}
