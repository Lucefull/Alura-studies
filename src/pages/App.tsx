import React, { useState } from "react";
import Cronometer from "../components/Cronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../types/Tasks";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((e) => {
          if (e.id === selected.id) {
            return {
              ...e,
              selected: false,
              complete: true,
            };
          }
          return e;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometer selected={(selected)} finishTask ={finishTask} />
    </div>
  );
}

export default App;
