import React, {useState} from 'react'
import Efron from './Efron';
import Checkboxes from './Checkboxes';
import Select from './Select';


export default function Anterior({tests, handleTestChange}) {
  const [showSelect, setShowSelect] = useState(false);
  const [userTestInput, setUserTestInput] = useState([])
  const renderedTests = tests.filter(test => test.show)

  const handleSelectShow = () => {
    setShowSelect(!showSelect)
  }

  const handleUserInputChange = (e, testName) => {
    let input = [...userTestInput];
    let index;
    let testToChange = input.find((item, i) => {
      index = i;
      return item.test === testName;
    })
    if (testToChange === undefined) {
    input.push({
      test: testName,
      input: e.target.value,

    })} else {
      input[index] = {
        test: testName,
        input: e.target.value,
      }
    }
    setUserTestInput(input)
  }

  const copyContent = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyTest = (e) => {
    e.preventDefault();
    let input = [...userTestInput];
    let inputText = "";
    input.map((test) => {
      if(test.input !== "") {
        inputText += `${test.test}: ${test.input}\n`
      }
    })
    copyContent(inputText)
  }

  const showModal = () => {
    setModalVisible(true);

    // Hide the modal after two seconds
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };
  
  return (
    <div>
    <div className="flex content-center justify-center w-full mb-5">
      <form>
        <div className='w-52'>
          <Select handleSelectShow={handleSelectShow}/>
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
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        </div>    
      </form>
      <div className='flex content-center justify-center w-full my-4'>
        <button 
          className='bg-purple-300 p-2 rounded'
          onClick={(e) => handleCopyTest(e)}
        > 
          Kopier!
        </button>
      </div>
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
