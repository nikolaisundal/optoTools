import React from 'react'

export default function ScaleNum({number, handleUserInputChange, id, eyeId, setIsHovering}) {
  const num = number.toFixed(1)
  return (
    <button
        tabIndex="-1"
        className='w-8 rounded border hover:border-2 border-black opacity-100 hover:opacity-100 text-black'
        type="submit"
        name={number}
        value={`E ${num}`}   
        onMouseDown={(e) => {
          handleUserInputChange(e, eyeId, id);
          setIsHovering(false);}}
    >
        {num}
    </button>
  )
}

