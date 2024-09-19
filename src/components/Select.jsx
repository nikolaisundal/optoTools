import React from "react";

export default function Select({ handleSelectShow, showSelect }) {
  return (
    <div
      className="relative cursor-pointer "
      onClick={() => handleSelectShow()}
    >
      <select
        className={`w-56 p-2 border-r-4 border-black  ${
          showSelect
            ? "rounded-t-lg border-black border-2 border-b-0 "
            : "rounded-lg border-2 border-b-4 "
        }`}
      >
        <option className="flex justify-center items-center">
          Velg tester
        </option>
      </select>
      <div className="absolute left-0 right-0 top-0 bottom-0 "></div>
    </div>
  );
}
