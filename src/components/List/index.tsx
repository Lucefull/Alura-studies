import React from "react";
import styles from './List.module.scss';

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },{
      task:'Typesscript',
      time: '03:00:00',
    }
  ];
  return (
    <aside className={styles.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles.item}>
            <h3>{task.task}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
