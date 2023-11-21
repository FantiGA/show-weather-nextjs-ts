/*
 * @Author: fantiga
 * @Date: 2023-11-15 16:54:28
 * @LastEditTime: 2023-11-21 17:23:58
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/page.tsx
 */

import Query from "@/components/Query";
import { metadata } from "./layout";
import styles from "./page.module.css";

const Page = () => (
  <>
    <div className={styles.description}>
      <h1>{metadata.title?.toString()}</h1>
    </div>
    <div className={styles.description}>
      <Query />
    </div>
  </>
);

export default Page;
