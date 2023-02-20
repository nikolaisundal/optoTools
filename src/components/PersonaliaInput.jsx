import React from 'react'

export default function PersonaliaInput({personalia:{address, name, birthDate, comment}, handlePersonaliaChange}) {
  return (
    <div className='w-full justify-center flex mb-8'>
        <form>
            <div className='flex flex-row'>
                <div className='grid md:grid-cols-9 gap-3 mb-3'>
                    <div className='flex items-center col-span-3 md:col-span-1 lg:col-span-1'>
                        <label 
                            className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                            htmlFor="name">Navn:
                        </label>
                    </div> 
                    <div className='flex items-center col-span-2 mr-1'>
                        <input 
                            className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
                            type="text" 
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e)=> handlePersonaliaChange(e)}
                        />
                    </div>
                    <div className='flex items-center col-span-3 md:col-span-1'>
                        <label 
                            className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                            htmlFor="birthDate">Fødselsdato:
                        </label>
                    </div> 
                    <div className='flex items-center col-span-2 '>    
                        <input 
                            className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
                            type="text" 
                            name="birthDate"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e)=> handlePersonaliaChange(e)}
                        />
                    </div>
                    <div className='flex items-center col-span-3 md:col-span-1 lg:col-span-1'>
                        <label 
                            className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                            htmlFor="address">Adresse:
                        </label>
                    </div> 
                    <div className='flex items-center col-span-2'>    
                        <input 
                            className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
                            type="text" 
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e)=> handlePersonaliaChange(e)}
                            />
                    </div>
                </div>              
            </div>
        </form>
    </div>
  )
}

