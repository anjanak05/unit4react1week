import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({ addTodo }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value, setValue] = useState("");

  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={value}
        placeholder="Add Task..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        data-cy="add-task-button"
        onClick={() => {
          console.log(value);
          addTodo(value)
          setValue("");
        }}
      >
        
        +
      </button>
    </div>
  );
};

export default AddTask;
