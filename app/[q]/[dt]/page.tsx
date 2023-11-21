/*
 * @Author: fantiga
 * @Date: 2023-11-17 18:47:26
 * @LastEditTime: 2023-11-21 17:37:15
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/[q]/[dt]/page.tsx
 */

import Detail from "@/components/Detail";
import Query from "@/components/Query";
import { RequestQueryForms } from "@/types";
import { getData } from "@/utils";
import styles from "../../page.module.css";

const Page = async ({ params: { q, dt } }: RequestQueryForms) => {
  if (!dt) {
    console.error("Date is required!");
    return;
  }

  const data = await getData(q, dt);

  if (!data || !data.forecast) {
    console.error("The API got some error!");
    return;
  }

  const date = new Date(dt);

  return (
    <>
      <div className={styles.description}>
        <h1>{`${date.getDate()}/${date.getMonth() + 1}`}</h1>
      </div>
      <div className={styles.description}>
        <Query q={data.location.name} />
        <Detail {...data.forecast.forecastday[0]} />
      </div>
    </>
  );
};

export default Page;
