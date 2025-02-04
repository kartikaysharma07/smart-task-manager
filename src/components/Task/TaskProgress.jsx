import React from "react";
import { useSelector } from "react-redux";

const TaskProgress = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="flex flex-col gap-4">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
};

export default TaskProgress;
