import { useState } from "react";
import { taskData } from "../../data/taskData";

import style from "./TaskCard.module.scss";
import CardContent from "../CardContent/CardContent";
import CardBtn from "../CardBtn/CardBtn";

const TaskCard = ({ task, handleDelete }) => {
  // const {taskID, task, priority} = task;
  
  const deleteTask = () =>{
    handleDelete(task.id);
  };
  
  
  return (
    <div className={style.task}>
      {/* <CardContent task={task.task} priority={task.priority} />
      <CardBtn>Delete</CardBtn> */}

      <h4>{task.task}</h4>
      <p>Priority: {task.priority}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskCard;
