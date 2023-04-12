import Multiselect from 'multiselect-react-dropdown';
import { useRef, useState, useEffect } from 'react';



export default function Calculator(props) {
  const {
    handleLensPriceChange, 
    handleOnRemove, 
    handleLensPrice, 
    options,
    options2, 
    specPrice,
    handleFrameNameChange,
    handleFrameNameOnSelect,
    handleFrameNameOnRemove,
    handleFramePriceChange,
    inputRefArray,
    index
  } = props





  



  return (
      <form>
      <div className='w-[700px] mx-auto'>
      <div className='flex flex-row mb-2 justify-center'>
          <div className='w-32'>
              <label 
                  className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                  htmlFor="Innfatning">Innfatning:
              </label>
          </div> 
          <div className='w-96 mr-4'> 
            <Multiselect
              className='bg-slate-50 appearance-none border-2 border-gray-200 rounded-lg text-gray-700 leading-tight' 
              options={options2}
              selectionLimit="1"
              displayValue="type"
              placeholder='Velg sku/navn'
              hidePlaceholder='true'
              onSelect={(e) => handleFrameNameOnSelect(e, specPrice.id)}
              onRemove={(e) => handleFrameNameOnRemove(e, specPrice.id)}
              style={{
                searchBox: {
                  border: 'none'
                },
                chips: { 
                  background: "rgb(22 101 52)"}
            }}
            />
          </div>
          <div className='w-32'>
            <input 
              className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight' 
              type="text" 
              name="price"
              id="price"
              value={specPrice.framePrice} 
              onChange={(e) => handleFramePriceChange(e, specPrice.id)}
              />
          </div>
      </div> 
      <div className='flex flex-row justify-center mb-4'>
          <div className='w-32'>
              <label 
                  className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                  htmlFor="glass">Glass:
              </label>
          </div>
          <div className='w-96 mr-4'> 
            <Multiselect
              className='bg-slate-50 appearance-none border-2 border-gray-200 rounded-lg text-gray-700 leading-tight' 
              options={options}
              selectionLimit="1"
              displayValue="type"
              groupBy="cat"
              placeholder='Velg glass'
              hidePlaceholder='true'
              onSelect={(e) => handleLensPrice(e, specPrice.id, index)}
              onRemove={(e) => handleOnRemove(e, specPrice.id)}
              selectedValues={specPrice.id === 2 && specPrice.lensType !== "" ?
                [
                  {
                    type: `${specPrice.lensType}`
                  }
                ]:null}
              style={{
                searchBox: {
                  border: 'none'
                },
                chips: { 
	                background: "rgb(22 101 52)"}
            }}
            />
          </div>
          <div className='w-32'>    
            <input
                className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight' 
                type="text" 
                name="price"
                id="price"
                ref={inputRefArray}
                value={specPrice.lensPrice}
                onChange={(e) => handleLensPriceChange(e, specPrice.id)}
                />
          </div>
        </div>
      </div>
        
      </form>
  )
}





/* 

*/