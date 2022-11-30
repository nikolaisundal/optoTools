import React from 'react'

export default function CorneaOther() {
  return (
    <>      
      <div className='flex items-center'>
        <label className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
          htmlFor="Kornea">Kornea:
        </label>
      </div>
      <div className='flex items-center col-span-3'>    
          <textarea 
            className='appearance-none border-2 resize-none border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
            id="Kornea" 
            name="Kornea" 
            rows="2" 
            cols="50">
          </textarea>
      </div>    
    </>
  )
}
