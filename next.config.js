/*
 * @Author: fantiga
 * @Date: 2023-11-15 16:54:28
 * @LastEditTime: 2023-11-22 18:53:46
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/next.config.js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    NEXT_PUBLIC_DAYS: process.env.NEXT_PUBLIC_DAYS,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  // output: "export",
};

module.exports = nextConfig;
