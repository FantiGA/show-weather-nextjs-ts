/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/show-weather-nextjs-ts",
  publicRuntimeConfig: {
    NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  },
  output: "export"
};

module.exports = nextConfig;
