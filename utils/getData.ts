/*
 * @Author: fantiga
 * @Date: 2023-11-21 14:54:50
 * @LastEditTime: 2023-11-26 14:46:14
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/utils/getData.ts
 */

import { ResultCurrent } from "@/types";
import { NEXT_DAYS_CONFIG } from ".";

/**
 * Get data asynchronously from the Weather API
 * @param {string} q query string
 * @param {string | undefined} dt specific date
 * @returns {Promise<ResultCurrent | undefined>}
 */
export const getData = async (
  q: string,
  dt: string | undefined = undefined,
): Promise<ResultCurrent | undefined> => {
  /** Combining API URLs */
  const apiBaseUrl = "https://api.weatherapi.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY ?? process.env.WEATHER_API_KEY;

  const url = dt
    ? `${apiBaseUrl}/forecast.json?key=${apiKey}&q=${q}&days=${NEXT_DAYS_CONFIG}&dt=${dt}&aqi=no&alerts=no`
    : `${apiBaseUrl}/forecast.json?key=${apiKey}&q=${q}&days=${NEXT_DAYS_CONFIG}&aqi=no&alerts=no`;

  let response: Response;
  try {
    response = await fetch(url, {
      cache: "force-cache",
    });
  } catch (error) {
    console.error("Error: ", error);
    return;
  }

  let data: ResultCurrent;
  try {
    data = await response.json();
  } catch (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
};
