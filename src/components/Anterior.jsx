import React, {useState} from 'react'
import Efron from './Efron';
import Checkboxes from './Checkboxes';


export default function Anterior({tests, handleTestChange}) {
  const [showSelect, setShowSelect] = useState(false);
  const renderedTests = tests.filter(test => test.show)

  const handleSelectShow = () => {
    setShowSelect(!showSelect)
  }

  console.log(showSelect)
  return (
    <div>
    <div className="flex content-center justify-center w-full mb-5">
      <form>
        <div className='w-52'>
          <div className='relative cursor-pointer' onClick={()=> handleSelectShow()}>
            <select className='w-52 p-2'>
              <option className='flex justify-center items-center p-2'>Velg tester</option>
            </select>
            <div className="absolute left-0 right-0 top-0 bottom-0"></div>
          </div>
          {showSelect ?
            <div className='bg-white'>
            {tests.map(test => (
                      <Checkboxes
                        key={test.id}
                        test={test}
                        handleTestChange={handleTestChange}   
                      />
                    ))} 
            </div>: null}
        </div>
      </form>
    </div>
      <form className='w-100'>
        <div className='flex content-center justify-center w-full'>
          <div className='grid grid-cols-4 gap-3'>
            {renderedTests.map(test => (
              <Efron 
                key={test.id}
                test={test}   
              />
            ))}                
          </div>
        </div>    
      </form>
   </div>
  )
}

//https://stackoverflow.com/questions/17714705/how-to-use-checkbox-inside-select-option


/* import React, {useState} from 'react'
import Efron from './Efron';
import CorneaOther from './CorneaOther';
import Checkboxes from './Checkboxes';

export default function Anterior({tests, handleTestChange}) {
  console.log(tests)
  const renderedTests = tests.filter(test => test.show)
  return (
    <div>
      <div className="flex content-center justify-center w-full mb-5">
        {tests.map(test => (
                  <Checkboxes
                    key={test.id}
                    test={test}
                    handleTestChange={handleTestChange}   
                  />
                ))}
      </div>
    
      <form className='w-100'>
        <div className='flex content-center justify-center w-full'>
          <div className='grid grid-cols-4 gap-3'>
            {renderedTests.map(test => (
              <Efron 
                key={test.id}
                test={test}   
              />
            ))}                
          </div>
        </div>    
      </form>
   </div>
  )
} */
