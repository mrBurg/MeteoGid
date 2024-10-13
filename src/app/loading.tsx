import classNames from 'classnames';

import style from './index.module.scss';

export default function Loading() {
  return <div className={classNames(style.error)}>Завантаження...</div>;
}
