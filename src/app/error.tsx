'use client';

import classNames from 'classnames';
import { useEffect } from 'react';

import style from './index.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={classNames(style.error)}>
      <h2>Щось пішло не так!</h2>
      <button onClick={() => reset()}>Спробуйте знову</button>
    </div>
  );
}
