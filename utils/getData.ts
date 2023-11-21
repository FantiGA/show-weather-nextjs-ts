/*
 * @Author: fantiga
 * @Date: 2023-11-21 14:54:50
 * @LastEditTime: 2023-11-21 16:40:07
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/utils/getData.ts
 */

import { ResultCurrent } from "@/types";

export const getData = async (q: string, dt: string | undefined = undefined) => {
  const apiBaseUrl = "https://api.weatherapi.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY ?? process.env.WEATHER_API_KEY;
  const days = 10;

  const url = dt
    ? `${apiBaseUrl}/forecast.json?key=${apiKey}&q=${q}&days=${days}&dt=${dt}&aqi=no&alerts=no`
    : `${apiBaseUrl}/forecast.json?key=${apiKey}&q=${q}&days=${days}&aqi=no&alerts=no`;

  let response: Response;
  try {
    response = await fetch(url, {
      cache: "force-cache",
    });
  } catch (error) {
    console.error(error);
    return;
  }

  let data: ResultCurrent;
  try {
    data = await response.json();
  } catch (error) {
    console.error(error);
    return;
  }

  return data;
};
