/*
 * @Author: fantiga
 * @Date: 2023-11-17 15:36:21
 * @LastEditTime: 2023-11-23 20:00:35
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/types/forms/Query.ts
 */

export interface QueryForms {
  /**
   * Query parameter based on which data is sent back. It could be following:
   * - Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
   * - city name e.g.: q=Paris
   * - US zip e.g.: q=10001
   * - UK postcode e.g: q=SW1
   * - Canada postal code e.g: q=G2J
   * - metar:<metar code> e.g: q=metar:EGLL
   * - iata:<3 digit airport code> e.g: q=iata:DXB
   * - auto:ip IP lookup e.g: q=auto:ip
   * - IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1
   * - By ID returned from Search API. e.g: q=id:2801268
   * - bulk
   */
  q: string;
  /**
   * Restrict date output for Forecast and History API method.
   * Required for History and Future API.
   * 
   * - For history API 'dt' should be on or after 1st Jan, 2010 in yyyy-MM-dd format (i.e. dt=2010-01-01)
   * - For forecast API 'dt' should be between today and next 14 day in yyyy-MM-dd format (i.e. dt=2010-01-01)
   * - For future API 'dt' should be between 14 days and 300 days from today in the future in yyyy-MM-dd format (i.e. dt=2023-01-01)
   */
  dt?: string;
}

export interface RequestQueryForms {
  params: QueryForms;
}
