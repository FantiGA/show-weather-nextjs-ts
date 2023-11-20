/*
 * @Author: fantiga
 * @Date: 2023-11-17 18:47:26
 * @LastEditTime: 2023-11-17 19:25:15
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/app/detail/page.tsx
 */

import styles from "./page.module.css";

const Detail = () => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.description}>
          <h1>Detail</h1>
        </div>
        <div className={styles.description}>Detail</div>
      </div>
    </main>
  );
};

export default Detail;
