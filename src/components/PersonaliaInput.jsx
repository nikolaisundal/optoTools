import React from 'react'

export default function PersonaliaInput({personalia:{address, name, birthDate, comment}, handlePersonaliaChange}) {
  return (
    <form>
            <div className='flex mx-auto flex-col w-[700px] mb-8'>
            <div className='w-[652px] mx-auto'>
            <div className='flex flex-row mb-2'>
                    <div className='w-32'>
                        <label 
                            className='text-gray-800 font-bold mb-1 whitespace-nowrap' 
                            htmlFor="name">Navn:
                        </label>
                    </div> 
                    <div className='w-96'>
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
                <div className='flex flex-row mb-2'>    
                    <div className='w-32'>
                        <label 
                            className='text-gray-800 font-bold mb-1 whitespace-nowrap' 
                            htmlFor="birthDate">Fødselsdato:
                        </label>
                    </div> 
                    <div className='w-96'>    
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
                <div className='flex flex-row'>
                    <div className='w-32'>
                        <label 
                            className='text-gray-800 font-bold mb-1 whitespace-nowrap' 
                            htmlFor="address">Adresse:
                        </label>
                    </div> 
                    <div className='w-96'>    
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
                 
            </div>
    </form>
  )
}

