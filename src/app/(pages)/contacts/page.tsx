'use client';

import classNames from 'classnames';

import style from './index.module.scss';

const contacts = [
  {
    name: 'Tsytok Ruslan',
    email: 'post_tsr@ukr.net',
  },
  {
    name: 'Burhonov Fedir',
    email: 'fed-@ukr.net',
  },
];

export default function Page() {
  return (
    <>
      <h1 className={classNames(style.title)}>Контакти:</h1>
      <div className={classNames(style.content)}>
        {contacts.map(({ name, email }) => (
          <p key={email}>
            {name}: <a href={`mailto:${email}`}>{email}</a>
          </p>
        ))}
      </div>
    </>
  );
}
