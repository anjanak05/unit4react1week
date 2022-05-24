import React, { useState } from "react";
import styles from "./tasks.module.css";

import AddTask from "../AddTask/AddTask";

const Tasks = ({todos, deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {todos.map((todo) =>(
          <AddTask key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
