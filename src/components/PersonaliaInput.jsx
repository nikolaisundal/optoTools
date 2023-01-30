import React from 'react'

export default function PersonaliaInput({name, birthDate, handlePersonaliaChange}) {
  return (
    <div className='w-full justify-center flex mb-8'>
      <form>
        <div className='flex flex-row'>
            <div className='grid grid-cols-4 gap-3'>
                <div className='flex items-center col-span-1'>
                    <label 
                        className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                        htmlFor="glass">Navn:
                    </label>
                </div> 
                <div className='flex items-center col-span-3'>    
                    <input 
                        className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
                        type="text" 
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e)=> handlePersonaliaChange(e)}
                        />
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3 ml-6'>
                <div className='flex items-center col-span-2'>
                    <label 
                        className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                        htmlFor="glass">Fødselsdato:
                    </label>
                </div> 
                <div className='flex items-center col-span-3'>    
                    <input 
                        className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
                        type="text" 
                        name="birthDate"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e)=> handlePersonaliaChange(e)}
                        />
                </div>
            </div>
            </div>
        </form>
    </div>
  )
}
