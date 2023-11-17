/*
 * @Author: fantiga
 * @Date: 2023-11-16 14:01:05
 * @LastEditTime: 2023-11-17 18:55:58
 * @LastEditors: fantiga
 * @FilePath: /show-weather-nextjs-ts/components/Query.tsx
 */

"use client";

import styles from "@/styles/query.module.css";
import { QueryForm } from "@/types/Forms2";
import { Location } from "@/types/Location";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Query = () => {
  const [location, setLocation] = useState<Location | null>();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
  } = useForm<QueryForm>();
  const onSubmit: SubmitHandler<QueryForm> = (data) => console.log(data);

  const handleInputChange = () => {
    const q = getValues("q").trim();
    console.log(q);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (!(getValues("q").trim()) && location) {
      setValue("q", `${location.latitude}, ${location.longitude}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.latitude, location?.longitude]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formItem}>
        <label className={styles.formLabel}>City or coordinate:</label>
        <fieldset className={styles.formFieldset}>
          <input className={styles.formInput} type="text" placeholder="Example: (Tokyo) or (0.1234, 5.6789)" {...register("q")} onChange={handleInputChange} />
          <button className={styles.formButton}>Query</button>
        </fieldset>
      </div>
    </form>
  );
};

export default Query;
