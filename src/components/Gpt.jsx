import React, { useState } from 'react'

export default function Gpt() {
    const [house, setHouse] = useState("");

    function handleChange(event) {
        setHouse(event.target.value);
      }
  return (
    <div className='text-center'><div>
    {house !== "---" ? <h1>{house}</h1> : null}

    <h1>
    
    </h1>
    <select value={house} onChange={handleChange}>
      <option value="---">---</option>
      <option value="Gryffindor">Gryffindor</option>
      <option value="Slytherin">Slytherin</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Hufflepuff">Hufflepuff</option>
    </select>
  </div></div>
  )
}

