'use client';

import Image from 'next/legacy/image';
// import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

import { gt } from '@/utils';

export function Content() {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await fetch('/api', { method: 'GET' });
      const { data } = await fetchData.json();

      setData(data);
    };

    fetchData();
  }, []);

  const { weather, forecast } = useMemo(
    () => ({ weather: data.weather, forecast: data.forecast }),
    [data]
  );

  if (Object.keys(data).length) {
    const date = new Date(weather.dt * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return (
      <>
        <div className={classNames(style.weather)}>
          <div className={classNames(style.overhead)}>
            <span>
              {gt.gettext(weather.name)} - {gt.gettext(weather.sys.country)}
            </span>
            <span>
              {gt.gettext('now')} {day}-{month}-{year}
            </span>
          </div>
          <div>{gt.gettext('Weather')}</div>
          <div>{weather.main.temp}&deg;</div>
          <div>{gt.gettext('today')}</div>
          <div className={style.forecast__wrap}>
            <div className={classNames(style.forecast)}>
              {forecast.list.map((item: any, index: number) => {
                const time = new Date(item.dt * 1000);

                return (
                  <div key={index} className={classNames(style.forecast__item)}>
                    <div>
                      {time.getHours()}:{time.getMinutes()}
                    </div>
                    <div>{item.main.temp}&deg;</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className={classNames(style.content)}> */}
        {/* <div>{data.base}</div> */}
        {/* <div> */}
        <Image
          // className={classNames(style.img)}
          src="/images/weather.png"
          alt=""
          width={1100}
          height={600}
          layout="responsive"
          priority
        />
        {/* </div> */}
        {/* <Image
        src="/images/radar.png"
        alt=""
        width={1100}
        height={600}
        layout="responsive"
        priority
      /> */}
        {/* <div className={classNames(style.cols)}>
        <Image
          src="/images/forecast.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
          priority
        />
        <Image
          src="/images/forecast_current.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
          priority
        />
      </div> */}
        {/* <Image
        src="/images/weather_props.png"
        alt=""
        width={1100}
        height={600}
        layout="responsive"
        priority
      /> */}
        {/* <div className={classNames(style.cols)}>
        <Image
          src="/images/temperature.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
          priority
        />
        <Image
          src="/images/winds.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
          priority
        />
      </div> */}
        {/* </div> */}
      </>
    );
  }

  return null;
}
