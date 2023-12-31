/*
 * @Author: fantiga
 * @Date: 2023-11-16 14:01:05
 * @LastEditTime: 2023-11-23 20:07:43
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Query.tsx
 */

"use client";

import styles from "@/styles/query.module.css";
import { Location, QueryForms, QueryProps } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Query: FC<QueryProps> = ({ q }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const { register, handleSubmit, getValues, setValue } = useForm<QueryForms>();
  const router = useRouter();
  const onSubmit: SubmitHandler<QueryForms> = (data, event) => {
    event?.preventDefault();
    handleQuery();
  };

  /**
   * Get the current coordinates and fill in the field `q`. Then initiate a request.
   */
  const handleFillCurrent = useCallback(() => {
    if (!getValues("q").trim() && location) {
      const newValue = `${location.latitude},${location.longitude}`;
      setValue("q", newValue);
      router.push(`/${newValue}`);
    }
  }, [getValues, location, router, setValue]);

  /**
   * Then initiate a request.
   */
  const handleQuery = () => {
    const q = getValues("q").trim();
    router.push(`/${q}`);
  };

  /**
   * Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
   */
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  /**
   * If a value for `q` is passed in,
   * refill it into `q`.
   */
  useEffect(() => {
    q && setValue("q", q);
  }, [q, setValue]);

  return (
    <div className={styles.queryForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.formLabel}>Location Input:</h3>
        <fieldset className={styles.formFieldset}>
          <input
            className={styles.formInput}
            id="q"
            type="text"
            placeholder="Example: (Tokyo) or (0.1234,5.6789)"
            autoFocus={true}
            {...register("q")}
          />
          <button
            id="button-fill-current"
            className={styles.formButton}
            onClick={handleFillCurrent}
          >
            📍
          </button>
          <button id="button-query" className={styles.formButton} onClick={handleQuery}>
            🔍
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Query;
