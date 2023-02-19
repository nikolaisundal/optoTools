import React from 'react'

export default function RadioRow({handleOfferChange}) {
  return (
    <div className='text-center mb-5 flex justify-center flex-wrap' onChange={(e) => handleOfferChange(e.target.value)}>
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="radio" 
                value="ToForEnUV" 
                name="Tilbud"   
                defaultChecked/> 
                To for en inkl. UV
        </div>
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="radio" 
                value="ToForEn" 
                name="Tilbud"/> 
                To for en
        </div>
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="radio" 
                value="Komplett" 
                name="Tilbud" /> 
                Komplett   
        </div>    
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="radio" 
                value="60+" 
                name="Tilbud" /> 
                60+   
        </div>
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="radio" 
                value="GoldenTicket" 
                name="Tilbud" /> 
                Golden ticket
        </div>
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="radio" 
                value="NAV" 
                name="Tilbud" /> 
                NAV
        </div>
        <div>
            <input 
                className='ml-4 mr-1 cursor-pointer' 
                type="checkbox" 
                value="Synstest" 
                name="Synstest" /> 
                Synstest
        </div>
        
    </div>
  )
}
