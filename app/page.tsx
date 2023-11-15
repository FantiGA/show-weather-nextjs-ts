"use client";

import { useEffect } from 'react';
import styles from './page.module.css';

const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.WEATHER_API_KEY;

export default function Home() {

  useEffect(() => {
    console.log('NEXT_PUBLIC_WEATHER_API_KEY:', process.env.NEXT_PUBLIC_WEATHER_API_KEY);
  }, []);

  return (
    <div className={styles.main}>Hello!, API Key: {weatherApiKey}</div>
  );
}