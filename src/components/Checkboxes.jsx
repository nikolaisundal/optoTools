import React from "react";

export default function Checkboxes({ test, handleTestChange }) {
  return (
    <div className="mx-2 px-3">
      <label className="cursor-pointer">
        <input
          className="m-2 cursor-pointer"
          type="checkbox"
          id={test.id}
          name={test.name}
          value={test.name}
          checked={test.show}
          onChange={() => handleTestChange(test.id)}
        />
        {test.name}
      </label>
    </div>
  );
}
