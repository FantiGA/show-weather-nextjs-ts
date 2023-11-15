import styles from './page.module.css';

const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.WEATHER_API_KEY;

export default function Home() {
  return (
    <div className={styles.main}>Hello!, API Key: {weatherApiKey}</div>
  );
}