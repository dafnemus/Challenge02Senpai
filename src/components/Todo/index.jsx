/* eslint-disable react/prop-types */
import { useState } from "react";
import { todos } from "../../constants/todoList";
import TodoCard from "../Card";
import styles from "./styles.module.css";

const Todo = ({ theme }) => {
  const [tasks, setTasks] = useState(todos);
  const [item, setItem] = useState("");

  function addTask(taskTitle) {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      content: taskTitle,
      isCompleted: false,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  const handleInput = (e) => setItem(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask(item);
    setItem("");
  };

  return (
    <div className={styles.todoContainer}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add new task"
          type="text"
          onChange={handleInput}
          value={item}
        />
      </form>
      <div className={theme ? styles.list : styles.listDark}>
        {tasks.map((task) => (
          <TodoCard key={task.id} text={task.content} theme={theme} />
        ))}
        <div>
          <p>{} items left</p>
          <button type="button">Clear Completed</button>
        </div>
      </div>
      <div>
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>
      <p>Drag and drop reoder list</p>
    </div>
  );
};

export default Todo;
