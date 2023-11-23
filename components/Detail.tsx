/*
 * @Author: fantiga
 * @Date: 2023-11-21 17:20:30
 * @LastEditTime: 2023-11-23 20:11:06
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Detail.tsx
 */

"use client";

import styles from "@/styles/detail.module.css";
import { ResultForecastDay } from "@/types";
import Image from "next/image";
import { FC } from "react";

const Detail: FC<ResultForecastDay> = (props) => {
  // Convert string date into Date object
  const date = new Date(props.date);

  return (
    <section className={styles.currentSection}>
      <h2>Weather at {`${date.getDate()}/${date.getMonth() + 1}`}</h2>
      <div className={styles.gridContainer}>
        <div className={styles.condition}>
          <Image
            src={`https:${props.day.condition.icon}`}
            alt={props.day.condition.text}
            width={128}
            height={128}
          />
          <h3>{props.day.condition.text}</h3>
        </div>
        <div className={styles.gridItem}>
          <dl>
            <dt>Max:</dt>
            <dd>{props.day.maxtemp_c}°C</dd>
          </dl>
          <dl>
            <dt>Min:</dt>
            <dd>{props.day.mintemp_c}°C</dd>
          </dl>
          <dl>
            <dt>Avg:</dt>
            <dd>{props.day.avgtemp_c}°C</dd>
          </dl>
          <dl>
            <dt>Precip:</dt>
            <dd>{props.day.totalprecip_mm} mm</dd>
          </dl>
          <dl>
            <dt>Max Wind:</dt>
            <dd>{props.day.maxwind_kph} kph</dd>
          </dl>
          <dl>
            <dt>Sunrise:</dt>
            <dd>{props.astro.sunrise}</dd>
          </dl>
          <dl>
            <dt>Sunset:</dt>
            <dd>{props.astro.sunset}</dd>
          </dl>
          <dl>
            <dt>Moonrise:</dt>
            <dd>{props.astro.moonrise}</dd>
          </dl>
          <dl>
            <dt>Moonset:</dt>
            <dd>{props.astro.moonset}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Detail;
