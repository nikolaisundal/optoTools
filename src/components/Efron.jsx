import React, {useState} from 'react'

export default function Efron({id, name, eye, handleUserInputChange, img}) {

  const [isHovering, setIsHovering] = useState(false);

  return (
    (name === "Kornea" || name === "Kommentar") ?
    <>      
      <div className='flex items-center justify-center sm:justify-start'>
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
      <div className='flex items-center justify-center sm:justify-start'>
          <label 
              className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2 cursor-pointer'
              onMouseEnter={() =>setIsHovering(true)}   
              onMouseLeave={() =>setIsHovering(false)}   
              htmlFor={name}>{name}:
          </label>
      </div>
      <div className='flex items-center col-span-3 relative'>    
          <input 
              className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
              type="text" 
              id={id}
              name={name}
              value={eye.value}
              onChange={(e) =>handleUserInputChange(e, eye.id, id)} 
              />
          {isHovering && img &&(
        <img
          className="absolute top-10 left-0 z-10"
          src={img}
          alt={name}
        />)}
      </div>
    </>
  )
}
