import React from "react";
import { ITask } from "../../types/Tasks";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";
class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, complete: false, id: uuidv4() },
    ]);

    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          Adicione um novo estudo
          <label htmlFor="tarefa"></label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
