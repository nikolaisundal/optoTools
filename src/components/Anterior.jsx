import React, {useState} from 'react'
import Efron from './Efron';
import Checkboxes from './Checkboxes';
import Select from './Select';


export default function Anterior(props) {
  const {
    tests, 
    handleTestChange, 
    handleUserInputChange, 
    handleCopyTest,
    handleReset,
    modalVisible
  } = props;

  const [showSelect, setShowSelect] = useState(false);
  const renderedTests = tests.filter(test => test.show)

  const handleSelectShow = () => {
    setShowSelect(!showSelect)
  }

  
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
    <div className='flex justify-center'>
      <form className='w-50 mx-3'>
        <h2 className='text-lg text-center mb-3 font-bold'>OD:</h2>
          <div className='grid grid-cols-4 gap-3'>
            {renderedTests.map(test => (
              <Efron 
                key={test.id}
                id={test.id}
                name={test.name}
                eye={test.od}
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        <div className='flex content-center justify-center w-full gap-8 my-4'>
        <button 
          className='bg-green-800 text-slate-50 p-2 rounded w-20'
          onClick={(e) => handleCopyTest(e, "buttonOd")}
        > 
          Kopier!
        </button>
        <button 
          className='bg-orange-300 text-black p-2 rounded w-20'
          onClick={(e) => handleReset(e, "resetOd")}
        > 
          Reset
        </button>
      </div>    
      </form>
      <form className='w-50 mx-3'>
        <h3 className='text-lg text-center mb-3 font-bold'>OS:</h3>
          <div className='grid grid-cols-4 gap-3'>
            {renderedTests.map(test => (
              <Efron 
                key={test.id}
                id={test.id}
                name={test.name}
                value={test.valueOs}
                eye={test.os}
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        <div className='flex content-center justify-center w-full gap-8 my-4'>
          <button 
            className='bg-green-800 text-slate-50 p-2 rounded w-20'
            onClick={(e) => handleCopyTest(e, "buttonOs")}
          > 
            Kopier!
          </button>
          <button 
            className='bg-green-800 text-slate-50 p-2 rounded w-20'
            onClick={(e) => handleReset(e, "resetOs")}
          > 
            Reset
          </button>
        </div>    
      </form>
      </div>
      <div className='w-full relative flex content-center justify-center'>
      {modalVisible ? 
            <div className='absolute z-50 top-14 border-solid bg-slate-100 rounded p-2 w-20 text-center'>
              Kopiert!
            </div> 
          : null}
      </div>
   </div>
  )
}

/* import React, {useState} from 'react'
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
    <div className='flex justify-center'>
      <form className='w-50 mx-3'>
        <h2 className='text-lg text-center mb-3 font-bold'>OD:</h2>
          <div className='grid grid-cols-4 gap-3'>
            {renderedTests.map(test => (
              <Efron 
                key={test.id}
                test={test}
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        <div className='flex content-center justify-center w-full my-4'>
        <button 
          className='bg-purple-300 p-2 rounded'
          onClick={(e) => handleCopyTest(e)}
        > 
          Kopier!
        </button>
      </div>    
      </form>
      <form className='w-50 mx-3'>
        <h3 className='text-lg text-center mb-3 font-bold'>OS:</h3>
          <div className='grid grid-cols-4 gap-3'>
            {renderedTests.map(test => (
              <Efron 
                key={test.id}
                test={test}
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        <div className='flex content-center justify-center w-full my-4'>
        <button 
          className='bg-purple-300 p-2 rounded'
          onClick={(e) => handleCopyTest(e)}
        > 
          Kopier!
        </button>
      </div>    
      </form>
      </div>
   </div>
  )
} */