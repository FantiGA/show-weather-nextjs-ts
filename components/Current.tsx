/*
 * @Author: fantiga
 * @Date: 2023-11-20 17:03:35
 * @LastEditTime: 2023-11-23 20:11:28
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Current.tsx
 */

"use client";

import styles from "@/styles/current.module.css";
import { ResultCurrent } from "@/types";
import Image from "next/image";
import { FC } from "react";

const Current: FC<ResultCurrent> = (props) => (
  <section className={styles.currentSection}>
    <h2>Current Weather</h2>
    <div className={styles.gridContainer}>
      <div className={styles.condition}>
        <Image
          src={`https:${props.current.condition.icon}`}
          alt={props.current.condition.text}
          width={128}
          height={128}
        />
        <h3>{props.current.condition.text}</h3>
      </div>
      <div className={styles.gridItem}>
        <dl className={styles.temperature}>
          <dt>{props.current.temp_c}</dt>
          <dd>°C</dd>
        </dl>
        <dl>
          <dt>Name:</dt>
          <dd>{props.location.name}</dd>
        </dl>
        {props.location.region && (
          <dl>
            <dt>Region:</dt>
            <dd>{props.location.region}</dd>
          </dl>
        )}
        <dl>
          <dt>Country:</dt>
          <dd>{props.location.country}</dd>
        </dl>
        <dl>
          <dt>Local Time:</dt>
          <dd>{props.location.localtime}</dd>
        </dl>
        <dl>
          <dt>Wind:</dt>
          <dd>{props.current.wind_kph} kph</dd>
        </dl>
        <dl>
          <dt>Precip:</dt>
          <dd>{props.current.precip_mm} mm</dd>
        </dl>
        <dl>
          <dt>Pressure:</dt>
          <dd>{props.current.pressure_mb} mb</dd>
        </dl>
      </div>
    </div>
  </section>
);

export default Current;
