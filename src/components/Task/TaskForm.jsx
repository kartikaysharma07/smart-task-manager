import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addTask, updateTask } from "../../redux/features.js/taskSlice";
import { validateTask } from "../../utils/formValidation";
import SelectInput from "../InputSection/SelectInput";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const existingTask = tasks.find((t) => t.id === parseInt(id));
      if (existingTask) setTask(existingTask);
    }
  }, [id, tasks]);

  const handlePriorityChange = (e) => {
    setTask({ ...task, priority: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateTask(task);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (id) {
      dispatch(updateTask({ ...task, id: parseInt(id) }));
    } else {
      dispatch(addTask({ ...task, id: Date.now() }));
    }
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div
        className="w-full md:max-w-md p-10 rounded-lg shadow-md"
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
        }}
      >
        <h2
          className="text-xl md:text-2xl tracking-wide font-semibold mb-4"
          style={{ color: "var(--text-color)" }}
        >
          {id ? "Update Task" : "Add Task"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 overflow-auto">
          <label htmlFor="title" className="block text-md font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            value={task.title}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
              setErrors({ ...errors, title: "" });
            }}
            className="w-full mb-0 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.title && (
            <p className="text-red-500 my-2 p-0 text-xs tracking-wide">
              {errors.title}
            </p>
          )}
          <label htmlFor="description" className="block text-md font-medium mb-1 mt-6">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description"
            value={task.description}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
              setErrors({ ...errors, description: "" });
            }}
            className="w-full p-3 mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.description && (
            <p className="text-red-500 my-2 p-0 text-xs tracking-wide">
              {errors.description}
            </p>
          )}
          <label htmlFor="dueDate" className="block text-md font-medium mb-1 mt-6">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            value={task.dueDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              setTask({ ...task, dueDate: e.target.value });
              setErrors({ ...errors, dueDate: "" });
            }}
            className="w-full p-3 mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.dueDate && (
            <p className="text-red-500 my-2 p-0 text-xs tracking-wide">
              {errors.dueDate}
            </p>
          )}

          <SelectInput
            id="priority"
            value={task.priority}
            onChange={handlePriorityChange}
            options={["Low", "Medium", "High"]}
            label="Priority"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200"
          >
            {id ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
