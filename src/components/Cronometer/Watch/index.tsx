import styles from './Watch.module.scss';

interface Props{
  time:number|undefined;
}

export default function Watch({time=0}:Props) {
  const minutes = Math.floor(time/60);
  const seconds = time%60;
  const [minutoDezena,minutoUnidade] = String(minutes).padStart(2,'0');

  const [segundDezena,segundooUnidade] = String(seconds).padStart(2,'0');
  return (
    <>
      <span className={styles.watchNumber}>{minutoDezena}</span>
      <span className={styles.watchNumber}>{minutoUnidade}</span>
      <span className={styles.watchDivision}>:</span>
      <span className={styles.watchNumber}>{segundDezena}</span>
      <span className={styles.watchNumber}>{segundooUnidade}</span>
    </> 
  );
}
