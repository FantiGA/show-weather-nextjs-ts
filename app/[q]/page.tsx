/*
 * @Author: fantiga
 * @Date: 2023-11-18 20:42:55
 * @LastEditTime: 2023-11-21 11:05:52
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/[q]/page.tsx
 */

import Current from "@/components/Current";
import Query from "@/components/Query";
import { RequestQueryForms, ResultCurrent } from "@/types";
import styles from "../page.module.css";

const getData = async (q: string) => {
  const apiBaseUrl = "https://api.weatherapi.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY ?? process.env.WEATHER_API_KEY;

  const url = `${apiBaseUrl}/forecast.json?key=${apiKey}&q=${q}&days=10&aqi=no&alerts=no`;
  const response = await fetch(url, {
    cache: "force-cache",
  });
  const data: ResultCurrent = await response.json();

  return data;
};

// export const Forecast = () => <Link href={"/detail"}>Forecast</Link>;

const Home = async ({ params: { q } }: RequestQueryForms) => {
  const data = await getData(q);
  console.log(data);

  return (
    <>
      <Query q={data.location.region} />
      <Current {...data} />
      <div className={styles.grid}>
        {/* {data.map((item) => (
              <div key={item.id}>
                <Forecast />
              </div>
            ))} */}
      </div>
    </>
  );
};

export default Home;
