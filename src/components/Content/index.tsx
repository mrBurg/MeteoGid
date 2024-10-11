'use client';

import Image from 'next/image';

import classNames from 'classnames';

import style from './index.module.scss';

export function Content() {
  return (
    <div className={classNames(style.content)}>
      {/* <div> */}
      <Image
        className={classNames(style.img)}
        src="/images/weather.png"
        alt=""
        /* width={100} height={500}  */ fill={true}
      />
      <Image
        className={classNames(style.img)}
        src="/images/radar.png"
        alt=""
        /* width={100} height={500}  */ fill={true}
      />
      <div className={classNames(style.cols)}>
        <Image
          className={classNames(style.img)}
          src="/images/forecast.png"
          alt=""
          /* width={100} height={500}  */ fill={true}
        />
        <Image
          className={classNames(style.img)}
          src="/images/forecast_current.png"
          alt=""
          /* width={100} height={500}  */ fill={true}
        />
      </div>
      <Image
        className={classNames(style.img)}
        src="/images/weather_props.png"
        alt=""
        /* width={100} height={500}  */ fill={true}
      />
      <div className={classNames(style.cols)}>
        <Image
          className={classNames(style.img)}
          src="/images/temperature.png"
          alt=""
          /* width={100} height={500}  */ fill={true}
        />
        <Image
          className={classNames(style.img)}
          src="/images/winds.png"
          alt=""
          /* width={100} height={500}  */ fill={true}
        />
      </div>
      {/* </div> */}
    </div>
  );
}
