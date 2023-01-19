import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Anterior from './components/Anterior';
import Calculator from './components/Calculator';
import RadioRow from './components/RadioRow'
import Eye from './components/Eye';
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

  

  const [offerSelect, setOfferSelect] = useState("ToForEn")
  const [modalVisible, setModalVisible] = useState(false)
  const [options] = useState(lens)
  const [specPrice, setSpecPrice] = useState(initialState)
  
  const inputRefArray = [useRef(), useRef()]
    
  useEffect(() => { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tests))
  }, [tests])
  
  

  useEffect(() => {
    handleCalculateTotal()
  }, [offerSelect]) 


 /*  function updateLensPrice(id, newPrice, state) {
  //Husk å ikke mutere state. dra den ut..
    for (let prop in state) {
        if (state[prop].id === id) {
            state[prop].lensPrice = newPrice;
            return state;
        }
    }
} */

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
    if (lensTypeOne.includes("farge") && lensTypeTwo.includes("farge")) {
      if (specNum1Total > specNum2Total) {
        specPriceCopy.cheapestId = specPriceCopy.specNum2.id
        specPriceCopy.total = specNum1Total
      } else {
        specPriceCopy.cheapestId = specPriceCopy.specNum1.id
        specPriceCopy.total = specNum2Total
      }
    } else if (lensTypeOne.includes("farge")) {
        specNum1Total = (specNum1Total - 400)
    } else if (lensTypeTwo.includes("farge")) {
        specNum2Total = (specNum2Total - 400)    
    } if (specNum1Total > specNum2Total) {
      specPriceCopy.cheapestId = Number(specPriceCopy.specNum2.id)
      specPriceCopy.total = specNum1Total
    } else {
      specPriceCopy.cheapestId = Number(specPriceCopy.specNum1.id)
      specPriceCopy.total = specNum2Total
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
      specNum1Total = (specNum1Total - 800)
      specPriceCopy.total = specNum1Total
      setSpecPrice(specPriceCopy)
    } else if (offerSelect === "60+") {
      specNum1Total = (specNum1Total * 0.75)
      specPriceCopy.total = specNum1Total
      setSpecPrice(specPriceCopy)
    } else if (offerSelect === "GoldenTicket") {
      specNum1Total = (specNum1Total * 0.50)
      specPriceCopy.total = specNum1Total
      setSpecPrice(specPriceCopy)
    } else if (offerSelect === "NAV") {
      specPriceCopy.total = specNum1Total
      setSpecPrice(specPriceCopy)
    }
  }

  const handleCalculateTotal = () => {
    if (offerSelect === "ToForEn") {
      calculateTwoForOne()
    } else {
      calculateOtherOffers()
    }
  }

  const handleTestChange = (id) => {
    const testArray = [...tests];
    const selctedTest = testArray.find(test => 
      test.id === id
    )
    selctedTest.show = !selctedTest.show
    setTests(testArray) 
  }

  const handleOfferChange = (value) => {
    let specPriceCopy = {...specPrice}
    if (offerSelect !== "ToForEn"){
      specPriceCopy.specNum2 = initialState.specNum2
      setSpecPrice(specPriceCopy)
    }
    setOfferSelect(value)
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
    if ( id === 1) {
      specPriceCopy.specNum1.lensPrice = Number(e.target.value)
    } else {
      specPriceCopy.specNum2.lensPrice = Number(e.target.value)
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
    if ( id === 1) {
      specPriceCopy.specNum1.framePrice = Number(e.target.value)
    } else {
      specPriceCopy.specNum2.framePrice = Number(e.target.value)
    }
    setSpecPrice(specPriceCopy)
    handleCalculateTotal()
  }
  return (
    <div className="mt-20">
    <div className="flex absolute top-12 left-6 bg-purple-400 rounded-md shadow-2xl">
      <Eye className="cursor-pointer pr-2" />
      <Eye className="cursor-pointer pl-2" />
      <div className='text-lg px-1'>optoTools</div>
    </div>
      <h1 className='text-center text-3xl my-5'>
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
      <h4 className='text-center text-3xl my-5'>
        Brillekalkulator
      </h4>
        <RadioRow
          handleOfferChange={handleOfferChange}
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
      {offerSelect === "ToForEn"&&
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
        <div className='text-center mt-5'>
          Total: {specPrice.total > 0 ? specPrice.total: 0}kr{/* <button ref={inputRefArray}>Skriv ut</button> */}
        </div>
        {console.log(specPrice.cheapestId)}
    </div>
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
    name: "Neovascularisering",
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