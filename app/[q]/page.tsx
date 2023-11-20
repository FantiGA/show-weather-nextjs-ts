/*
 * @Author: fantiga
 * @Date: 2023-11-18 20:42:55
 * @LastEditTime: 2023-11-20 15:32:52
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/[q]/page.tsx
 */

import Query from "@/components/Query";
import { RequestQueryForms, ResultCurrent } from "@/types";
import Link from "next/link";
import { metadata } from "../layout";
import styles from "../page.module.css";

const getData = async (q: string) => {
  const apiBaseUrl = "https://api.weatherapi.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY ?? process.env.WEATHER_API_KEY;

  const url = `${apiBaseUrl}/current.json?key=${apiKey}&q=${q}`;
  const response = await fetch(url, {
    cache: "force-cache",
  });
  const data: ResultCurrent = await response.json();

  return data.location;
};

export const Forecast = () => <Link href={"/detail"}>Forecast</Link>;

const Home = async ({ params: { q } }: RequestQueryForms) => {
  const data = await getData(q);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.description}>
          <h1>{metadata.title?.toString()}</h1>
        </div>
        <div className={styles.description}>
          <Query q={data.name} />
          <div className={styles.grid}>
            q:{q}
            {/* {data.map((item) => (
              <div key={item.id}>
                <Forecast />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
