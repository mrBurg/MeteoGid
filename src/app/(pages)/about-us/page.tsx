import classNames from 'classnames';

import style from './index.module.scss';

const { BASE_URL } = process.env;

export default async function Page() {
  const fetchData = await fetch(`${BASE_URL}/about-us/api`, {
    method: 'POST',
  });
  const { status, data } = await fetchData.json();

  if (status == 200) {
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
  }

  return null;
}
