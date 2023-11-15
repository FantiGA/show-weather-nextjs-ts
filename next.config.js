/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/show-weather-nextjs-ts",
  publicRuntimeConfig: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  output: "export"
};

module.exports = nextConfig;
