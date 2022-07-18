import { ITask } from "../../../types/Tasks";
import styles from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  complete,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelecionado : ""} ${
        complete ? styles.itemCompletado : ""
      }`}
      onClick={() =>
        !complete &&
        selectTask({
          task,
          time,
          selected,
          complete,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && (
        <span
          className={styles.concluido}
          aria-label="Tarefa Completada"
        ></span>
      )}
    </li>
  );
}
