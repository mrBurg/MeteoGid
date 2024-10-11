'use client';

import Image from 'next/image';

import classNames from 'classnames';

import style from './index.module.scss';

export function Content() {
  return (
    <div className={classNames(style.content)}>
      <Image
        src="/images/weather.png"
        alt=""
        width={1100}
        height={600}
        layout="responsive"
      />
      <Image
        src="/images/radar.png"
        alt=""
        width={1100}
        height={600}
        layout="responsive"
      />
      <div className={classNames(style.cols)}>
        <Image
          src="/images/forecast.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
        />
        <Image
          src="/images/forecast_current.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
        />
      </div>
      <Image
        src="/images/weather_props.png"
        alt=""
        width={1100}
        height={600}
        layout="responsive"
      />
      <div className={classNames(style.cols)}>
        <Image
          src="/images/temperature.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
        />
        <Image
          src="/images/winds.png"
          alt=""
          width={550}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
}
