// import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { ReactNode, Suspense } from 'react';

import styles from './index.module.scss';

import Loading from './loading';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
      {/* </ErrorBoundary> */}
    </Suspense>
    // </ErrorBoundary>
  );
}
