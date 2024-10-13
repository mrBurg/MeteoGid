import classNames from 'classnames';

import style from './index.module.scss';

// const { BASE_URL } = process.env;

export default async function Page() {
  /* const fetchData = await fetch(`${BASE_URL}/about-us/api`, {
    method: 'POST',
  }); */
  // const { status, data } = await fetchData.json();

  const data = {
    title: 'Про нас',
    text: [
      '<b>MeteoGid</b> – додаток призначений для персоналізованого прогнозування погоди, надаючи користувачам індивідуальні рекомендації щодо погодних умов з акцентом на push - сповіщення.',
      'Додаток допомагає користувачам планувати свій день, вдягатися відповідно до погоди, та завчасно реагувати на важливі зміни (опади, сильний вітер, заморозки).',
      'Крім того, користувачі зможуть отримувати погодні дані для різних країн та регіонів світу, включаючи прогнози на кілька днів, показники вологості, швидкості вітру, атмосферного тиску та інших параметрів.',
    ],
  };

  // if (status == 200) {
  return (
    <>
      <h1 className={classNames(style.title)}>{data.title}</h1>
      <div className={classNames(style.content)}>
        {data.text.map((item: string, index: number) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </div>
    </>
  );
  // }

  // return null;
}
