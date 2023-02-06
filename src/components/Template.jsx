import React, {useState} from 'react'
import Efron from './Efron';
import Checkboxes from './Checkboxes';
import Select from './Select';


export default function Template(props) {
  const {
    tests, 
    handleTestChange, 
    handleUserInputChange, 
    handleCopyTest,
    handleReset,
  } = props;

  const [showSelect, setShowSelect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  const renderedTests = tests.filter(test => test.show)

  const handleSelectShow = () => {
    setShowSelect(!showSelect)
  }

  const showModal = () => {
    setModalVisible(true);
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
                id={test.id}
                name={test.name}
                eye={test.od}
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        <div className='flex content-center justify-center w-full gap-8 my-6'>
        <button 
          className='bg-green-800 text-slate-50 p-2 rounded w-20'
          onClick={(e) => {
              handleCopyTest(e, "buttonOs", tests[0].id)
              showModal()  
            }}
        > 
          Kopier!
        </button>
        <button 
          className='bg-green-800 text-slate-50 p-2 rounded w-20'
          onClick={(e) => handleReset(e, "resetOd", tests[0].id)}
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
                eye={test.os}
                handleUserInputChange={handleUserInputChange}   
              />
            ))}                
          </div>
        <div className='flex content-center justify-center w-full gap-8 my-6'>
          <button 
            className='bg-green-800 text-slate-50 p-2 rounded w-20'
            onClick={(e) => {
              handleCopyTest(e, "buttonOs", tests[0].id)
              showModal()  
            }}
          > 
            Kopier!
          </button>
          <button 
            className='bg-green-800 text-slate-50 p-2 rounded w-20'
            onClick={(e) => handleReset(e, "resetOs", tests[0].id)}
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

