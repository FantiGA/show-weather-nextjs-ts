/*
 * @Author: fantiga
 * @Date: 2023-11-17 18:23:24
 * @LastEditTime: 2023-11-22 19:01:37
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Forecast.tsx
 */

"use client";

import styles from "@/styles/forecast.module.css";
import { ResultForecastDay } from "@/types";
import { NEXT_DAYS_CONFIG } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Forecast: FC<ResultForecastDay> = (props) => {
  const date = new Date(props.date);
  console.log("days", NEXT_DAYS_CONFIG);

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
