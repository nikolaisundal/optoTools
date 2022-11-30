import React from 'react'

export default function Select({handleSelectShow}) {
  return (     
        <div className='relative cursor-pointer' onClick={()=> handleSelectShow()}>
        <select className='w-52 p-2'>
            <option className='flex justify-center items-center p-2'>Velg tester</option>
        </select>
        <div className="absolute left-0 right-0 top-0 bottom-0"></div>
        </div>
    )
}
