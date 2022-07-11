import { ITask } from "../../../types/Tasks";
import styles from "../List.module.scss";

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
  console.log("Item Atual: ", { task, time, selected, complete, id });

  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelecionado : ''}`}
      onClick={() =>
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
    </li>
  );
}
