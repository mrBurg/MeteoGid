'use client';

// import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { ReactNode, Suspense } from 'react';
import Loading from './loading';
import { someFonction } from '@/app/api';
// import Error from './error';
// import NotFound from './not-found';

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // <ErrorBoundary fallback={<Error />}>
    <Suspense fallback={<Loading />}>
      {/* <ErrorBoundary fallback={<NotFound />}> */}
      <div>{children}</div>
      <button onClick={(event) => someFonction(event.currentTarget.innerText)}>
        Click
      </button>
      {/* </ErrorBoundary> */}
    </Suspense>
    // </ErrorBoundary>
  );
}
