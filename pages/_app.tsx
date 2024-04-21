import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import '@/styles/reset.scss';

import ModalGroup from '@/components/Modal/ModalGroup';
import AsyncBoundary from '@/components/common/AsyncBoundary';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  // ErrorBoundary: 자바스크립트 오류 처리; 비동기 에러의 경우 컴포넌트에서 throw error를 통해 자바스크립트 에러를 발생시킬 수 있다.
  // Suspense: 비동기 로딩 처리
  return (
    <AsyncBoundary>
      <QueryClientProvider client={queryClient}>
        <ModalGroup.Root>
          <Component {...pageProps} />
        </ModalGroup.Root>
      </QueryClientProvider>
    </AsyncBoundary>
  );
}
