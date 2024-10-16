'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './index.module.scss';

const mainMenu = [
  { text: 'Про нас', href: '/about-us' },
  { text: 'Контакти', href: '/contacts' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className={classNames(style.nav)}>
      {mainMenu.map(({ text, href }) => (
        <li key={href}>
          <Link
            className={classNames('link', {
              [style.active]: pathname === href,
            })}
            href={href}
          >
            {text}
          </Link>
        </li>
      ))}
    </nav>
  );
}
