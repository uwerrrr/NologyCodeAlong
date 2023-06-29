import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

export const TaskCardList = (props) => {
  const { taskData } = props;
  //   taskData = [
  // { task: "Clean the bathroom", priority: "low" },

  const [tasks, setTasks] = useState(taskData);
  // tasks is now a state value = array of Obj task

  const handleDelete = (taskID) => {
    const updatedTasks = tasks.filter((task) => task.id != taskID);
    // filter id that is different from the clicked task id

    // can delete with index as well because data is Array of Obj

    setTasks(updatedTasks);
    // set state value of tasks = updatedTasks
  };

  return (
    <section>
      {tasks.map((task, index) => {
        return <TaskCard key={index} task={task} handleDelete={handleDelete} />;
      })}
    </section>
  );
};
