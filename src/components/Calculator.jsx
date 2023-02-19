import Multiselect from 'multiselect-react-dropdown';



export default function Calculator(props) {
  const {
    handleLensPriceChange, 
    handleOnRemove, 
    handleLensPrice, 
    options, 
    specPrice,
    handleFrameNameChange,
    handleFramePriceChange,
    inputRefArray,
    index
  } = props
  return (
    <>
    <div className='w-full justify-center flex mb-3'>
      <form>
        <div className='grid grid-cols-5 gap-3 w-70'>
            <div className='flex items-center col-span-1'>
                <label 
                    className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                    htmlFor="Innfatning">Innfatning:
                </label>
            </div> 
          <div className='flex items-center col-span-3'>    
            <input 
                className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight' 
                type="text" 
                name="innfatning"
                id="innfatning"
                placeholder='Skriv inn merke/SKU'
                value={specPrice.frameName}
                onChange={(e) => handleFrameNameChange(e, specPrice.id)}
                />
          </div>
          <div className='flex items-center col-span-1'>    
            <input 
                className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight' 
                type="text" 
                name="price"
                id="price"
                value={specPrice.framePrice} 
                onChange={(e) => handleFramePriceChange(e, specPrice.id)}
                />
          </div>
          <div className='flex items-center col-span-1'>
              <label 
                  className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                  htmlFor="glass">Glass:
              </label>
          </div>
          <div className='flex items-center col-span-3'> 
            <Multiselect
              className='bg-slate-50 appearance-none border-2 w-full s:w-[20rem] md:w-[22rem] lg:w-[38rem] xl:w-[43rem] border-gray-200 rounded-lg text-gray-700 leading-tight' 
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
                  border: 'none',
                },
                chips: { 
	                background: "rgb(22 101 52)"}
            }}
            />
          </div>
          <div className='flex items-center col-span-1'>    
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
      </form>
    </div>
    </>
  )
}



