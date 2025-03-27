import React from "react";

export function Select({ options = [], ...props }) {
  return (
    <select {...props} className="p-2 border rounded">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export function SelectContent({ children }) {
    return <div className="absolute bg-white shadow-md rounded-md p-2">{children}</div>;
  }
  
  export function SelectItem({ children, onClick }) {
    return (
      <div
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
  
  export function SelectTrigger({ children, onClick }) {
    return (
      <button
        className="border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center w-full"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  export function SelectValue({ value }) {
    return <span className="text-gray-700">{value}</span>;
  }