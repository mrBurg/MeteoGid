import classNames from 'classnames';

import { style } from './style.module.scss';

export default async function Page() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?q=Odesa&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const {
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      sea_level,
      grnd_level,
    },
  } = await data.json();

  console.log(style);

  return (
    <div className={classNames(style)}>
      <ul>
        <li>{feels_like}</li>
        <li>{temp}</li>
        <li>{temp_min}</li>
        <li>{temp_max}</li>
        <li>{pressure}</li>
        <li>{humidity}</li>
        <li>{sea_level}</li>
        <li>{grnd_level}</li>
      </ul>
    </div>
  );
}
