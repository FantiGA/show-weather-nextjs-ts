/*
 * @Author: fantiga
 * @Date: 2023-11-17 15:36:21
 * @LastEditTime: 2023-11-21 15:01:17
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/types/forms/Query.ts
 */

export interface QueryForms {
  q: string;
  dt?: string;
}

export interface RequestQueryForms {
  params: QueryForms;
}
