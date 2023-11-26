/*
 * @Author: fantiga
 * @Date: 2023-11-26 13:57:18
 * @LastEditTime: 2023-11-26 14:32:47
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Error.tsx
 */

"use client";

import styles from "@/styles/error.module.css";
import { ResultError } from "@/types";
import { FC, useEffect } from "react";

const Error: FC<ResultError> = ({ code, message }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(message);
  }, [message]);

  return (
    <div className={styles.errorMessage}>
      <h3>Something went wrong!</h3>
      <p>Error code: {code}</p>
      <p>Error message: {message}</p>
    </div>
  );
};

export default Error;
