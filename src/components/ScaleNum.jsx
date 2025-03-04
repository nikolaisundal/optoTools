import React from "react";

export default function ScaleNum({
  number,
  handleUserInputChange,
  id,
  eyeId,
  setIsHovering,
  className,
}) {
  const num = number.toFixed(1);
  return (
    <>
      <button
        tabIndex="-1"
        className={`w-6 rounded border hover:border-2 border-black opacity-100 hover:opacity-100 text-black text-xs ${className}`}
        type="submit"
        name={number}
        value={`E ${num}`}
        onMouseDown={(e) => {
          handleUserInputChange(e, eyeId, id);
          setIsHovering(false);
        }}
      >
        {num}
      </button>
    </>
  );
}
