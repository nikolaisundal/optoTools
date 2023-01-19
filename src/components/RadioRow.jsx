import React from 'react'

export default function RadioRow({handleOfferChange}) {
  return (
    <div className='text-center mb-5' onChange={(e) => handleOfferChange(e.target.value)}>
        <input 
            className='ml-4 mr-1 cursor-pointer' 
            type="radio" 
            value="ToForEn" 
            name="Tilbud"   
            defaultChecked/> 
            To for en
        <input 
            className='ml-4 mr-1 cursor-pointer' 
            type="radio" 
            value="Komplett" 
            name="Tilbud" /> 
            Komplett
        <input 
            className='ml-4 mr-1 cursor-pointer' 
            type="radio" 
            value="60+" 
            name="Tilbud" /> 
            60+
        <input 
            className='ml-4 mr-1 cursor-pointer' 
            type="radio" 
            value="GoldenTicket" 
            name="Tilbud" /> 
            Golden ticket
        <input 
            className='ml-4 mr-1 cursor-pointer' 
            type="radio" 
            value="NAV" 
            name="Tilbud" /> 
            NAV
    </div>
  )
}
