/*
 * @Author: fantiga
 * @Date: 2023-11-17 18:23:24
 * @LastEditTime: 2023-11-21 15:16:42
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Forecast.tsx
 */

"use client";

import { ResultForecastDay } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Forecast: FC<ResultForecastDay> = (props) => {
  const date = new Date(props.date);

  return (
    <Link href={`/${props.q}/${props.date}`}>
      <dl>
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
