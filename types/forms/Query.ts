/*
 * @Author: fantiga
 * @Date: 2023-11-17 15:36:21
 * @LastEditTime: 2023-11-20 15:16:34
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/types/forms/Query.ts
 */

export interface QueryForms {
  q: string;
}

export interface RequestQueryForms {
  params: QueryForms;
}