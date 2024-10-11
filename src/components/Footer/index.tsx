import classNames from 'classnames';

import style from './index.module.scss';

import { Copyright } from '../Copyright';

export function Footer() {
  return (
    <footer className={classNames(style.footer)}>
      <Copyright />
    </footer>
  );
}
