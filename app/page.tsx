/*
 * @Author: fantiga
 * @Date: 2023-11-15 16:54:28
 * @LastEditTime: 2023-11-17 16:17:00
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/page.tsx
 */
import Query from "@/components/Query";
import { metadata } from "./layout";
import styles from "./page.module.css";

export const getData = async () => {
  const apiBaseUrl = "http://api.weatherapi.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY ?? process.env.WEATHER_API_KEY;

  const url = `${apiBaseUrl}/current.json?key=${apiKey}&q=tokyo`;

  const response = await fetch(url, {
    cache: "force-cache",
  });
  const data = await response.json();

  return data.location;
};

export const Home = async () => {
  const data = await getData();

  return (
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
};

export default Home;
