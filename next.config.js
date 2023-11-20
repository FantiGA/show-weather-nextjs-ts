/*
 * @Author: fantiga
 * @Date: 2023-11-15 16:54:28
 * @LastEditTime: 2023-11-20 13:40:19
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/next.config.js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  },
  // output: "export",
};

module.exports = nextConfig;
