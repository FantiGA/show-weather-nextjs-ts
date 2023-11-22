/*
 * @Author: fantiga
 * @Date: 2023-11-22 20:37:55
 * @LastEditTime: 2023-11-22 20:40:00
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/cypress/plugins/index.ts
 */

import { cypressBrowserPermissionsPlugin } from "cypress-browser-permissions";

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  // The plugin may modify the Cypress config, so be sure
  // to return it
  config = cypressBrowserPermissionsPlugin(on, config);

  //
  // Any existing plugins you are using
  //

  return config;
};
