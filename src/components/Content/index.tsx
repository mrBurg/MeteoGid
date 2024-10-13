'use client';

import Image from 'next/legacy/image';
// import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

import { gt } from '@/utils';
import Clouds from './icons/clouds.svg';
import CloudsRain from './icons/clouds_rain.svg';
import CloudsSun from './icons/clouds_sun.svg';

const icons = [Clouds, CloudsRain, CloudsSun];

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
        <div className={classNames(style.content)}>
          <div className={classNames(style.weather)}>
            <div className={classNames(style.overhead)}>
              <span>
                {gt.gettext(weather.name)} - {gt.gettext(weather.sys.country)}
              </span>
              <span>
                {gt.gettext('now')} {day}-{month}-{year}
              </span>
            </div>
            <h2 className={classNames(style.title)}>
              {gt.gettext('Weather')} {gt.gettext(weather.name)}
            </h2>
            <div className={classNames(style.temperature)}>
              {weather.main.temp}&deg;
            </div>
            <div className={classNames(style.show_more)}>
              <Image
                src="/images/show-more.png"
                alt=""
                width={256}
                height={58}
                priority
              />
            </div>
            <div className={classNames(style.today)}>
              <span>{gt.gettext('today')}</span>
              <span>
                {new Date().getHours()}:{new Date().getMinutes()}
              </span>
            </div>
            <div className={style.forecast__wrap}>
              <div className={classNames(style.forecast)}>
                {forecast.list.map((item: any, index: number) => {
                  const time = new Date(item.dt * 1000);
                  const iconID = Math.floor(Math.random() * 3);
                  const Icon = icons[iconID];

                  return (
                    <div
                      key={index}
                      className={classNames(style.forecast__item)}
                    >
                      <div className={classNames(style.forecast__time)}>
                        {time.getHours()}:{time.getMinutes()}
                      </div>
                      <div className={classNames(style.forecast__temperature)}>
                        {item.main.temp}&deg;
                      </div>
                      <div className={classNames(style.forecast__icon)}>
                        {<Icon />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <Image
            src="/images/weather.png"
            alt=""
            width={963}
            height={535}
            layout="responsive"
            priority
          /> */}
          <Image
            src="/images/radar.png"
            alt=""
            width={592}
            height={379}
            layout="responsive"
            priority
          />
          <div className={classNames(style.cols)}>
            <Image
              src="/images/forecast.png"
              alt=""
              width={593}
              height={282}
              layout="responsive"
              priority
            />
            <Image
              src="/images/forecast_current.png"
              alt=""
              width={600}
              height={325}
              layout="responsive"
              priority
            />
          </div>
          <Image
            src="/images/weather_props.png"
            alt=""
            width={592}
            height={164}
            layout="responsive"
            priority
          />
          <div className={classNames(style.cols)}>
            <Image
              src="/images/temperature.png"
              alt=""
              width={593}
              height={375}
              layout="responsive"
              priority
            />
            <Image
              src="/images/winds.png"
              alt=""
              width={592}
              height={376}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </>
    );
  }

  return null;
}
