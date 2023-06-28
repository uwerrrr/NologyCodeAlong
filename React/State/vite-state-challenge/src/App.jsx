import { useState } from "react";
import { taskData } from "./data/taskData";

import { TaskCardList } from "./components/TaskCardList/TaskCardList";

function App() {
  return (
    <>
      <TaskCardList taskData={taskData} />
    </>
  );
}

export default App;
