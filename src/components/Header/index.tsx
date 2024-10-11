import classNames from 'classnames';

import style from './index.module.scss';

import { Nav } from '../Nav';
import { Logo } from '../Logo';

export function Header() {
  return (
    <header className={classNames(style.header)}>
      <Logo />
      <Nav />
    </header>
  );
}
