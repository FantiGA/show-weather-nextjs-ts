/*
 * @Author: fantiga
 * @Date: 2023-11-15 16:54:28
 * @LastEditTime: 2023-11-20 15:22:51
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/page.tsx
 */
import Query from "@/components/Query";
import { metadata } from "./layout";
import styles from "./page.module.css";

const Home = () => (
  <main className={styles.main}>
    <div className={styles.grid}>
      <div className={styles.description}>
        <h1>{metadata.title?.toString()}</h1>
      </div>
      <div className={styles.description}>
        <Query />
      </div>
    </div>
  </main>
);

export default Home;
