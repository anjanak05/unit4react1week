import React from "react";
import { useState } from "react";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import {v4 as uuidv4} from "uuid";
import Task from "./Task/Task";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = useState([]);
const addTodo = (newTodo) =>{
setTodos([...todos, {
id: uuidv4(),
value: newTodo,
}])
}

const deleteTodo =(value)=>{
  setTodos(todos.filter((todo) => todo !== value))
}
  
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      <AddTask addTodo={addTodo} />
      {/* Tasks */}
     
        <Tasks todos={todos} deleteTodo={deleteTodo} />
    <Task></Task>
    </div>
  );
};

export default TaskApp;
