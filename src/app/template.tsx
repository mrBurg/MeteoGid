// import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { ReactNode, Suspense } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

import Loading from './loading';
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
      <div className={classNames(styles.content)}>{children}</div>
      {/* </ErrorBoundary> */}
    </Suspense>
    // </ErrorBoundary>
  );
}
