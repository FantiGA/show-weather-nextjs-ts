/*
 * @Author: fantiga
 * @Date: 2023-11-22 19:39:17
 * @LastEditTime: 2023-11-22 23:30:13
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/cypress.config.ts
 */

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },

  env: {
    "cypress/globals": true,
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
      camera: "block",
      microphone: "block",
      images: "allow",
      javascript: "allow",
      popups: "ask",
      plugins: "ask",
      cookies: "allow",
    },
  },
});
