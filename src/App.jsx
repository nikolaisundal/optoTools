import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useReactToPrint } from 'react-to-print';

import Anterior from './components/Anterior';
import Calculator from './components/Calculator';
import RadioRow from './components/RadioRow'
import Eye from './components/Eye';
import Summary from './components/Summary';
import Personalia from './components/Personalia';
import PersonaliaInput from './components/PersonaliaInput';


import  lens  from './assets/lensPrices.jsx'


const LOCAL_STORAGE_KEY = "optoTools.tests"

function App() {
  const [tests, setTests] = useState(() => {
    const testJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (testJSON == null) {
      return sampleTests
    } else {
      return JSON.parse(testJSON)
    }
  });
  
  const initialState = {
    specNum1: {
      frameName: "",
      framePrice: 0,
      lensType: "",
      lensPrice: 0,
      id: 1
  },
    specNum2: {
      frameName: "",
      framePrice: 0,
      lensType: "",
      lensPrice: 0,
      id: 2
  }, 
    total: 0,
    cheapestId: 0
  }

  
  const [route, setRoute] = useState("template")
  const [offerSelect, setOfferSelect] = useState("ToForEnUV")
  const [modalVisible, setModalVisible] = useState(false)
  const [options] = useState(lens)
  const [synstest, setSynstest] = useState(false)
  const [specPrice, setSpecPrice] = useState(initialState)
  const [personalia, setPersonalia] = useState({
    name: "",
    birthDate: ""
  })
  
  const inputRefArray = [useRef(), useRef()]
  const componentRef = useRef();
  
  useEffect(() => { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tests))
  }, [tests])
  
  

  useEffect(() => {
    handleCalculateTotal()
  }, [offerSelect, synstest]) 

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Prisoverslag ${personalia.name}`
  });

  const handlePersonaliaChange = (e) => {
    let personaliaCopy = {...personalia}
    let propToChange = e.target.id;
    personaliaCopy = { ...personaliaCopy, [propToChange]: e.target.value };
    /* let propToChange = Object.keys(personaliaCopy).filter(key => key === e.target.id)
    personaliaCopy[propToChange] = e.target.value */
    setPersonalia(personaliaCopy)
  }

  const calculateTwoForOne = () => {
    let specPriceCopy = {...specPrice}
    let lensTypeOne = specPriceCopy.specNum1.lensType
    let lensTypeTwo = specPriceCopy.specNum2.lensType
    let specNum1Total = (
      specPriceCopy.specNum1.framePrice + 
      specPriceCopy.specNum1.lensPrice
    )
    let specNum2Total = (
      specPriceCopy.specNum2.framePrice + 
      specPriceCopy.specNum2.lensPrice
    )
    if (lensTypeOne.includes("m/farge") && lensTypeTwo.includes("m/farge")) {
      if (specNum1Total > specNum2Total) {
        specPriceCopy.cheapestId = specPriceCopy.specNum2.id
        specPriceCopy.total = specNum1Total
      } else {
        specPriceCopy.cheapestId = specPriceCopy.specNum1.id
        specPriceCopy.total = specNum2Total
      }
    } else if (offerSelect === "ToForEnUV" && lensTypeOne.includes("m/farge")) {
        specNum1Total = (specNum1Total - 400)
    } else if (offerSelect === "ToForEnUV" && lensTypeTwo.includes("m/farge")) {
        specNum2Total = (specNum2Total - 400)    
    } if (specNum1Total > specNum2Total) {
      specPriceCopy.cheapestId = Number(specPriceCopy.specNum2.id)
      specPriceCopy.total = specNum1Total
    } else {
      specPriceCopy.cheapestId = Number(specPriceCopy.specNum1.id)
      specPriceCopy.total = specNum2Total
    }
    if (synstest) {
      specPriceCopy.total = (specPriceCopy.total + 685)
    }
    setSpecPrice(specPriceCopy)
  }

  const calculateOtherOffers = () => {
    let specPriceCopy = {...specPrice}
    let specNum1Total = (
      specPriceCopy.specNum1.framePrice + 
      specPriceCopy.specNum1.lensPrice
    )
    if (offerSelect === "Komplett") {
      if (specPriceCopy.specNum1.lensPrice >= 800) {
        specNum1Total = (specNum1Total - 800)
      }
      specPriceCopy.total = specNum1Total
    } else if (offerSelect === "60+") {
      specNum1Total = (specNum1Total * 0.75)
      specPriceCopy.total = specNum1Total
    } else if (offerSelect === "GoldenTicket") {
      specNum1Total = (specNum1Total * 0.50)
      specPriceCopy.total = specNum1Total
    } else if (offerSelect === "NAV") {
      specPriceCopy.total = specNum1Total
    }
    if (synstest===true) {
      specPriceCopy.total = (specPriceCopy.total + 685)
  }
    setSpecPrice(specPriceCopy)
  }

  const handleCalculateTotal = () => {
    if (offerSelect === "ToForEn" || offerSelect === "ToForEnUV") {
      calculateTwoForOne()
    } else {
      calculateOtherOffers()
    }
  }

  const handleTestChange = (id) => {
    const testArray = [...tests];
    const selectedTest = testArray.find(test => 
      test.id === id
    )
    selectedTest.show = !selectedTest.show
    setTests(testArray) 
  }

  const handleOfferChange = (value) => {
    if (value === "Synstest") {
      setSynstest(!synstest)
    } else {
      setOfferSelect(value)
    }
  } 

  const handleUserInputChange = (e, eyeId) => {
    const testArray = [...tests]
    testArray.forEach(item => {
      if (item.od.id === eyeId) {
        item.od.value = e.target.value;
      } else if (item.os.id === eyeId) {
        item.os.value = e.target.value;
      }
    })
    setTests(testArray)
  }

  const copyContent = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyTest = (e, id) => {
    e.preventDefault();
    let testArray = [...tests];
    let inputText = "";
    if (id === "buttonOd") {
      testArray.map(test => {
        if (test.od.value !== "" && test.show) {
          inputText += `${test.name}: ${test.od.value}\n`
        }
      })
    } else if (id === "buttonOs") {
      testArray.map(test => {
        if (test.os.value !== "" && test.show) {
          inputText += `${test.name}: ${test.os.value}\n`
        }
      })
    }
    showModal();
    copyContent(inputText);
  }

  const handleReset = (e, id) => {
    e.preventDefault();
    let testArray = [...tests];
    if (id === "resetOd") {
      testArray.forEach(test => {
        test.od.value = ""
      })
    } else if (id === "resetOs") {
      testArray.forEach(test => {
        test.os.value = ""
      })
    }
    setTests(testArray);
  }

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  
  const handleLensPrice = (e, id, index) => {
    let specPriceCopy = {...specPrice}
    if ( id === 1) {
      specPriceCopy.specNum1.lensPrice = Number(e[0].price)
      specPriceCopy.specNum1.lensType = (e[0].type)
    } else {
      specPriceCopy.specNum2.lensPrice = Number(e[0].price)
      specPriceCopy.specNum2.lensType = (e[0].type)
    }
    
    setSpecPrice(specPriceCopy);
    inputRefArray[index].current.focus()
    handleCalculateTotal()
  }


  const handleOnRemove = (e, id) => {
    let specPriceCopy = {...specPrice}
    if ( id === 1) {
      specPriceCopy.specNum1.lensPrice = 0
      specPriceCopy.specNum1.lensType = ""
    } else {
      specPriceCopy.specNum2.lensPrice = 0
      specPriceCopy.specNum2.lensType = ""
    }
    setSpecPrice(specPriceCopy)
    handleCalculateTotal()
  }

  const handleLensPriceChange = (e, id) => {
    let specPriceCopy = {...specPrice}
    let num = Number(e.target.value)
    if (isNaN(num)) {
      return
    }
    if ( id === 1) {
      specPriceCopy.specNum1.lensPrice = num
    } else {
      specPriceCopy.specNum2.lensPrice = num
    }
    setSpecPrice(specPriceCopy)
    handleCalculateTotal()
  }

  const handleFrameNameChange = (e, id) => {
    let specPriceCopy = {...specPrice}
    if ( id === 1) {
      specPriceCopy.specNum1.frameName = e.target.value
    } else {
      specPriceCopy.specNum2.frameName = e.target.value
    }
    setSpecPrice(specPriceCopy)
  }
  
  const handleFramePriceChange = (e, id) => {
    let specPriceCopy = {...specPrice}
    let num = Number(e.target.value)
    if (isNaN(num)) {
      return
    }
    if ( id === 1) {
      specPriceCopy.specNum1.framePrice = num
    } else {
      specPriceCopy.specNum2.framePrice = num
    }
    setSpecPrice(specPriceCopy)
    handleCalculateTotal()
  }

  const handleRouteChange = (e) => {
    setRoute(e.target.id)
  }

  return (
    <>
    <div className="mt-4">
    <div className="flex absolute top-12 left-6 bg-purple-400 rounded-md shadow-2xl">
      <Eye className="cursor-pointer pr-2" />
      <Eye className="cursor-pointer pl-2" />
      <div className='text-lg px-1'>optoTools</div>
    </div>
    </div>
    <div className='text-right mb-10'>
      <button className='text-xl mr-4 hover:underline'
        id="calculator"
        onClick={(e)=> handleRouteChange(e)}>
        Brillekalkulator
      </button>
      <button className='text-xl mx-4 hover:underline'
        id="template"
        onClick={(e)=> handleRouteChange(e)}>
        Mal
      </button>
    </div>
    {route === "template" &&
      <>
      <h1 className='text-center text-3xl mb-5 mt-28'>
        Anterior
      </h1>
        <Anterior 
          handleUserInputChange={handleUserInputChange}
          handleTestChange={handleTestChange}
          handleCopyTest={handleCopyTest}
          handleReset={handleReset}
          showModal={showModal}
          modalVisible={modalVisible} 
          tests={[...tests]}  
        />
        </>}
      {route === "calculator" &&
      <>
      <h4 className='text-center text-3xl mb-5 mt-32'>
        Brillekalkulator
      </h4>
        <RadioRow
          handleOfferChange={handleOfferChange}
        />
        <PersonaliaInput
          name={personalia.name}
          birthDate={personalia.birthDate}
          handlePersonaliaChange={handlePersonaliaChange}
        />
          <Calculator
            index={0} 
            handleFramePriceChange={handleFramePriceChange}
            handleFrameNameChange={handleFrameNameChange}
            handleLensPriceChange={handleLensPriceChange} 
            handleOnRemove={handleOnRemove}
            handleLensPrice={handleLensPrice}
            options={options}
            specPrice={specPrice.specNum1}
            inputRefArray={inputRefArray[0]}
            />
      {(offerSelect === "ToForEn" || offerSelect === "ToForEnUV")&&
        <>    
          <Calculator
            index={1}  
            handleFramePriceChange={handleFramePriceChange}
            handleFrameNameChange={handleFrameNameChange}
            handleLensPriceChange={handleLensPriceChange} 
            handleOnRemove={handleOnRemove}
            handleLensPrice={handleLensPrice}
            options={options}
            specPrice={specPrice.specNum2}
            inputRefArray={inputRefArray[1]}
          />
        </>}
        <div ref={componentRef}>
          <Personalia
            name={personalia.name}
            birthDate={personalia.birthDate}
            />
          <h5 className='text-center mt-10 font-bold'>Brille 1:</h5>
          <div className="flex justify-center mb-5">
            <Summary 
              specPrice={specPrice.specNum1}
              offerSelect={offerSelect}
              cheapestId={specPrice.cheapestId}
              synstest={synstest}
              />
          </div>
          {(offerSelect === "ToForEn" || offerSelect === "ToForEnUV") ?
          <>
          <h6 className='text-center font-bold'>Brille 2:</h6>
          <div className="flex justify-center mb-10">
            <Summary 
              specPrice={specPrice.specNum2}
              offerSelect={offerSelect}
              cheapestId={specPrice.cheapestId}
            />
          </div>
          </>
          : null  
        }
          <div className='text-center mt-5 mb-6 font-bold'>
            Total: {specPrice.total > 0 ? specPrice.total: 0}kr
          </div>
        </div>
        <div className='flex justify-center mb-40'>
          <button className='bg-green-800 text-slate-50 p-2 rounded w-20'
            onClick={handlePrint}>
              Skriv ut
          </button>
        </div>
        </>} 
        </>
    
    
  )
}


export default App

const sampleTests = [
  {
    id: uuidv4(),
    name: "Konjunktival rødhet",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Limbal rødhet",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Palpebral rødhet",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Palpebral ruhet",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Meibomske kjertler",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Blefaritt",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Neovaskularisering",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Kornea",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
  {
    id: uuidv4(),
    name: "Kommentar",
    show: true,
    od: {
      id: uuidv4(),
      value: ""  
    },
    os: {
      id: uuidv4(),
      value: ""
    }
  },
]