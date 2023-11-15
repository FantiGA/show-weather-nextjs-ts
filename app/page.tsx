import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>Hello!, API Key: {process.env.WEATHER_API_KEY}</div>
  );
}