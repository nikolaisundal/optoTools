import React from 'react'

export default function Select({handleSelectShow, showSelect}) {
  return (     
        <div className='relative cursor-pointer' onClick={()=> handleSelectShow()}>
        <select className={`w-56 p-2 ${showSelect ? 'rounded-t' : 'rounded' }`}>
            <option className='flex justify-center items-center'>Velg tester</option>
        </select>
        <div className="absolute left-0 right-0 top-0 bottom-0"></div>
        </div>
    )
}


