import React from "react";
import { Link } from "react-router-dom";
import TaskList from "./Task/TaskList";
import TaskProgress from "./Task/TaskProgress";

const Home = () => {
  return (
    <div className="w-full container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold tracking-wide mb-4 md:mb-0">
          Dashboard
        </h1>
        <Link
          to="/task/new"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Add Task
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Task Progress Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64" style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)" }}>
          <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "var(--text-color)" }}>
            Task Progress
          </h2>
          <TaskProgress />
        </div>

        {/* Task List Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300" style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)" }}>
          <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-wide" style={{ color: "var(--text-color)" }}>
            All Tasks
          </h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
