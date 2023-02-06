import React from 'react'

export default function Efron({id, name, eye, handleUserInputChange}) {
  return (
    (name === "Kornea" || name === "Kommentar") ?
    <>      
      <div className='flex items-center'>
        <label className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
          htmlFor={name}>{name}:
        </label>
      </div>
      <div className='flex items-center col-span-3'>    
          <textarea 
            className='appearance-none border-2 resize-none border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
            id={id} 
            name={name}
            value={eye.value}
            onChange={(e) =>handleUserInputChange(e, eye.id, id)}
            rows="2" 
            cols="50">
          </textarea>
      </div>    
    </>:
    <>   
      <div className='flex items-center'>
          <label 
              className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
              htmlFor={name}>{name}:
          </label>
      </div>
      <div className='flex items-center col-span-3'>    
          <input 
              className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
              type="text" 
              id={id}
              name={name}
              value={eye.value}
              onChange={(e) =>handleUserInputChange(e, eye.id, id)}   
              />
      </div>
    </>
  )
}
