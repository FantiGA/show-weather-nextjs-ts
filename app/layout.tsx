/*
 * @Author: fantiga
 * @Date: 2023-11-15 16:54:28
 * @LastEditTime: 2023-11-21 17:10:09
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/layout.tsx
 */

import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import styles from "./page.module.css";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Show Weather App",
  description: "Show Weather App to know the weather on a specific location",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <main className={styles.main}>
        <div className={styles.grid}>{children}</div>
      </main>
    </body>
  </html>
);

export default RootLayout;
