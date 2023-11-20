/*
 * @Author: fantiga
 * @Date: 2023-11-17 18:23:24
 * @LastEditTime: 2023-11-17 18:51:59
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Forecast.tsx
 */

"use client";

import Link from "next/link";

const Forecast = () => {
  return (
    <>
      <Link href={"/detail"}>Forecast</Link>
    </>
  );
};

export default Forecast;
