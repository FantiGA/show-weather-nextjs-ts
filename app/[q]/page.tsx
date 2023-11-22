/*
 * @Author: fantiga
 * @Date: 2023-11-18 20:42:55
 * @LastEditTime: 2023-11-22 18:14:34
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/[q]/page.tsx
 */

import Current from "@/components/Current";
import Forecast from "@/components/Forecast";
import Query from "@/components/Query";
import { RequestQueryForms } from "@/types";
import { NEXT_DAYS_CONFIG, getData } from "@/utils";
import { metadata } from "../layout";
import styles from "../page.module.css";

const Page = async ({ params: { q } }: RequestQueryForms) => {
  const data = await getData(q);

  if (!data) {
    console.error("The API got some error!");
    return;
  }

  return (
    <>
      <div className={styles.description}>
        <h1>{metadata.title?.toString()}</h1>
      </div>
      <div className={styles.description}>
        <Query q={data.location.name} />
        <Current {...data} />
        <div className={styles.forecastList}>
          <h3>Next {NEXT_DAYS_CONFIG} Days</h3>
          {data.forecast?.forecastday.map((value, index) => (
            <div className={styles.forecast} key={index}>
              <Forecast q={data.location.name} {...value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
