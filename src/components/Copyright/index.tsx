import classNames from 'classnames';

import style from './index.module.scss';

export function Copyright() {
  return (
    <p className={classNames(style.copyright)}>
      &copy; {new Date().getFullYear()} MeteoMaster. All rights reserved.
    </p>
  );
}
