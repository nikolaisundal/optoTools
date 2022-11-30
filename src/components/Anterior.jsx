import React, {useState} from 'react'
import Efron from './Efron';
import CorneaOther from './CorneaOther';
import Checkboxes from './Checkboxes';

export default function Anterior({tests, handleTestChange}) {
  console.log(tests)
  const renderedTests = tests.filter(test => test.show)
  return (
    <div>
    <div className="flex content-center justify-center w-full mb-5">
      <form>
        <div className='w-52'>
        {tests.map(test => (
                  <Checkboxes
                    key={test.id}
                    test={test}
                    handleTestChange={handleTestChange}   
                  />
                ))}
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
