import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`flex justify-between items-center p-6 shadow-md transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-xl font-bold">
        <Link to="/">Smart Task Manager</Link>
      </h1>
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
          <div
            className={`w-16 h-8 rounded-full transition-all duration-300 ${
              isDarkMode ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1/2 left-1 transform -translate-y-1/2 transition-transform duration-300 ${
                isDarkMode ? "translate-x-8" : "translate-x-0"
              }`}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                  isDarkMode ? "border-white" : "border-gray-800"
                } bg-white`}
              >
                {isDarkMode ? "🌙" : "🌞"}
              </div>
            </span>
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
