import React from 'react'

export default function Checkboxes({test, handleTestChange}) {
  return (
    <div className="mx-2">
        <input
          className='m-2'
          type="checkbox"
          id={test.id}
          name={test.name}
          value={test.name}
          checked={test.show}
          onChange={() => handleTestChange(test.id)}  
        />
        {test.name}
      </div>
  )
}
