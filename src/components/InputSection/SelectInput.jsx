import React from "react";

const SelectInput = ({ id, value, onChange, options, label, style }) => {
  return (
    <div className="w-full mt-6">
      {label && <label htmlFor={id} className="block mb-2" style={{ color: "var(--text-color)" }}>{label}</label>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        style={{
          background: "var(--background-color)",
          color: "var(--text-color)",
          ...style,
        }}
      >
        {options.map((option) => (
          <option key={option} value={option} style={{
            background: "var(--background-color)",
            color: "var(--text-color)",
          }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
