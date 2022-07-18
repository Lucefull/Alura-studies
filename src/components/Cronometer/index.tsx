import Button from "../Button";
import Watch from "./Watch";
import styles from "./Cronometer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/Tasks";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  finishTask: ()=>void;
}

export default function Cronometer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
        if(counter>0){
            setTime(counter-1);
            return regressive(counter-1);
        }
        finishTask();
    }, 1000);
  }

  return (
    <div className={styles.cronometer}>
      <p className={styles.title}>Escolha um card e inicie o cronometro</p>
      <div className={styles.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar!</Button>
    </div>
  );
}
