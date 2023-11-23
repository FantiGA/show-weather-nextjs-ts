/*
 * @Author: fantiga
 * @Date: 2023-11-17 11:49:56
 * @LastEditTime: 2023-11-23 19:55:02
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/types/Results.ts
 */

/**
 * Weather and Geolocation API
 * https://www.weatherapi.com/docs
 */

import { QueryProps } from ".";

interface ResultCondition {
  /** Weather condition text */
  text: string;
  /** Weather condition icon */
  icon: string;
  /** Weather condition code */
  code: number;
}

interface ResultHourBase {
  /** Temperature in celsius */
  temp_c: number;
  /** Temperature in fahrenheit */
  temp_f: number;
  /** 
   * Whether to show day condition icon or night icon.
   * 1 = Yes, 0 = No
   */
  is_day: number;
  /** Weather condition */
  condition: ResultCondition;
  /** Wind speed in miles per hour */
  wind_mph: number;
  /** Wind speed in kilometer per hour */
  wind_kph: number;
  /** Wind direction in degrees */
  wind_degree: number;
  /** Wind direction as 16 point compass. e.g.: NSW */
  wind_dir: string;
  /** Pressure in millibars */
  pressure_mb: number;
  /** Pressure in inches */
  pressure_in: number;
  /** Precipitation amount in millimeters */
  precip_mm: number;
  /** Precipitation amount in inches */
  precip_in: number;
  /** Humidity as percentage */
  humidity: number;
  /** Cloud cover as percentage */
  cloud: number;
  /** Feels like temperature in celsius */
  feelslike_c: number;
  /** Feels like temperature in fahrenheit */
  feelslike_f: number;
  /** Visibility in kilometer */
  vis_km: number;
  /** Visibility in miles */
  vis_miles: number;
  /** Wind gust in miles per hour */
  gust_mph: number;
  /** Wind gust in kilometer per hour */
  gust_kph: number;
  /** UV Index */
  uv: number;
}

export interface ResultHourCurrent extends ResultHourBase {
  /** Local time when the real time data was updated in unix time. */
  last_updated_epoch: number;
  /** Local time when the real time data was updated. */
  last_updated: string;
}

export interface ResultHour extends ResultHourBase {
  /** Time as epoch */
  time_epoch: number;
  /** Date and time */
  time: string;
  /** Windchill temperature in celcius */
  windchill_c: number;
  /** Windchill temperature in fahrenheit */
  windchill_f: number;
  /** Heat index in celcius */
  heatindex_c: number;
  /** Heat index in fahrenheit */
  heatindex_f: number;
  /** Dew point in celcius */
  dewpoint_c: number;
  /** Dew point in fahrenheit */
  dewpoint_f: number;
  /** 
   * Will it will rain or not
   * 1 = Yes, 0 = No
   */
  will_it_rain: number;
  /** Chance of rain as percentage */
  chance_of_rain: number;
  /**
   * Will it snow or not
   * 1 = Yes, 0 = No
   */
  will_it_snow: number;
  /** Chance of snow as percentage */
  chance_of_snow: number;
}

export interface ResultCurrentLocation {
  /** Location name */
  name: string;
  /** Region or state of the location, if availa */
  region: string;
  /** Location country */
  country: string;
  /** Latitude in decimal degree */
  lat: number;
  /** Longitude in decimal degree */
  lon: number;
  /** Time zone name */
  tz_id: string;
  /** Local date and time in unix time */
  localtime_epoch: number;
  /** Local date and time */
  localtime: string;
}

export interface ResultForecastDay extends QueryProps {
  /** Forecast date */
  date: string;
  /** Forecast date as unix time. */
  date_epoch: number;
  day: {
    /** Maximum temperature in celsius for the day. */
    maxtemp_c: number;
    /** Maximum temperature in fahrenheit for the day */
    maxtemp_f: number;
    /** Minimum temperature in celsius for the day */
    mintemp_c: number;
    /** Minimum temperature in fahrenheit for the day */
    mintemp_f: number;
    /** Average temperature in celsius for the day */
    avgtemp_c: number;
    /** Average temperature in fahrenheit for the day */
    avgtemp_f: number;
    /** Maximum wind speed in miles per hour */
    maxwind_mph: number;
    /** Maximum wind speed in kilometer per hour */
    maxwind_kph: number;
    /** Total precipitation in milimeter */
    totalprecip_mm: number;
    /** Total precipitation in inches */
    totalprecip_in: number;
    totalsnow_cm: number;
    /** Average visibility in kilometer */
    avgvis_km: number;
    /** Average visibility in miles */
    avgvis_miles: number;
    /** Average humidity as percentage */
    avghumidity: number;
    /**
     * Will it will rain or not
     * 1 = Yes, 0 = No
     */
    daily_will_it_rain: number;
    /** Chance of rain as percentage */
    daily_chance_of_rain: number;
    /**
     * Will it snow or not
     * 1 = Yes, 0 = No
     */
    daily_will_it_snow: number;
    /** Chance of snow as percentage */
    daily_chance_of_snow: number;
    condition: ResultCondition;
    /** UV Index */
    uv: number;
  };
  astro: {
    /** Sunrise time */
    sunrise: string;
    /** Sunset time */
    sunset: string;
    /** Moonrise time */
    moonrise: string;
    /** Moonset time */
    moonset: string;
    /** 
     * Moon phases. Value returned:
     * - New Moon
     * - Waxing Crescent
     * - First Quarter
     * - Waxing Gibbous
     * - Full Moon
     * - Waning Gibbous
     * - Last Quarter
     * - Waning Crescent
     */
    moon_phase: string;
    /** Moon illumination as % */
    moon_illumination: number;
    is_moon_up: number;
    is_sun_up: number;
  };
  hour: ResultHour[];
}

export interface ResultCurrent {
  location: ResultCurrentLocation;
  current: ResultHourCurrent;
  forecast?: {
    forecastday: ResultForecastDay[];
  };
}
