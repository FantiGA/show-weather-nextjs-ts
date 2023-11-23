/*
 * @Author: fantiga
 * @Date: 2023-11-17 18:23:24
 * @LastEditTime: 2023-11-22 19:13:12
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Forecast.tsx
 */

"use client";

import styles from "@/styles/forecast.module.css";
import { ResultForecastDay } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Forecast: FC<ResultForecastDay> = (props) => {
  // Convert string date into Date object
  const date = new Date(props.date);

  return (
    <Link href={`/${props.q}/${props.date}`}>
      <dl className={styles.dataList}>
        <dt>{`${date.getDate()}/${date.getMonth() + 1}`}</dt>
        <dd>
          <Image
            src={`https:${props.day.condition.icon}`}
            alt={props.day.condition.text}
            width={64}
            height={64}
          />
        </dd>
      </dl>
    </Link>
  );
};

export default Forecast;
