/*
 * @Author: fantiga
 * @Date: 2023-11-17 11:49:56
 * @LastEditTime: 2023-11-20 15:30:46
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/types/Results.ts
 */

interface ResultCondition {
  text: string,
  icon: string,
  code: number,
}

interface ResultHourBase {
  temp_c: number,
  temp_f: number,
  is_day: number,
  condition: ResultCondition,
  wind_mph: number,
  wind_kph: number,
  wind_degree: number,
  wind_dir: string,
  pressure_mb: number,
  pressure_in: number,
  precip_mm: number,
  precip_in: number,
  humidity: number,
  cloud: number,
  feelslike_c: number,
  feelslike_f: number,
  vis_km: number,
  vis_miles: number,
  gust_mph: number,
  gust_kph: number,
  uv: number,
}

interface ResultHourCurrent extends ResultHourBase {
  last_updated_epoch: number,
  last_updated: string,
}

export interface ResultHour extends ResultHourBase {
  time_epoch: number,
  time: string,
  windchill_c: number,
  windchill_f: number,
  heatindex_c: number,
  heatindex_f: number,
  dewpoint_c: number,
  dewpoint_f: number,
  will_it_rain: number,
  chance_of_rain: number,
  will_it_snow: number,
  chance_of_snow: number,
}

export interface ResultCurrentLocation {
  name: string,
  region: string,
  country: string,
  lat: number,
  lon: number,
  tz_id: string,
  localtime_epoch: number,
  localtime: string,
}

export interface ResultCurrent {
  location: ResultCurrentLocation,
  current: ResultHourCurrent,
}
