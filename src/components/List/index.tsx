import { ITask } from "../../types/Tasks";
import Item from "./Item";
import styles from "./List.module.scss";

interface Props {
  tasks:ITask[],
  selectTask:(selectTask:ITask)=> void,
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={styles.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(task => (
          <Item 
          selectTask={selectTask}
          key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
