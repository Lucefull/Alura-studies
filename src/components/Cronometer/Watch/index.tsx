import styles from './Watch.module.scss';

export default function Watch() {
  return (
    <>
      <span className={styles.watchNumber}>0</span>
      <span className={styles.watchNumber}>0</span>
      <span className={styles.watchDivision}>:</span>
      <span className={styles.watchNumber}>0</span>
      <span className={styles.watchNumber}>0</span>
    </> 
  );
}
