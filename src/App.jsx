import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useReactToPrint } from 'react-to-print';

import Template from './components/Template';
import Calculator from './components/Calculator';
import RadioRow from './components/RadioRow'
import Eye from './components/Eye';
import Summary from './components/Summary';
import Personalia from './components/Personalia';
import PersonaliaInput from './components/PersonaliaInput';
import CommentInput from './CommentInput';


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
  const [options] = useState(lens)
  const [synstest, setSynstest] = useState(false)
  const [specPrice, setSpecPrice] = useState(initialState)
  const [personalia, setPersonalia] = useState({
    name: "",
    birthDate: "",
    address: "",
    comment: ""
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
    const testObject = {...tests};
    let selectedTest; 
    for (const key in testObject) {
      testObject[key].filter(test => {
        if (test.id === id) {
          selectedTest = test
        }
      })
    }
    selectedTest.show = !selectedTest.show
    setTests(testObject) 
  }

  const handleOfferChange = (value) => {
    if (value === "Synstest") {
      setSynstest(!synstest)
    } else {
      setOfferSelect(value)
    }
  } 

  const handleUserInputChange = (e, eyeId, testID) => {
    const testObject = {...tests}
    let selectedTest;
    for (const key in testObject) {
      testObject[key].filter(test => {
        if (test.id === testID) {
          selectedTest = test
        }  
      })
    }
    for (const key in selectedTest) {
      if(selectedTest[key].id === eyeId) {
        selectedTest[key].value = e.target.value
      }  
    } 
    setTests(testObject)
  }

  const copyContent = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }


  const handleCopyTest = (e, btn, id) => {
    e.preventDefault();
    let componentToCopy;
    let inputText = "";
    const testObject = {...tests}

    for (const key in testObject) {
      testObject[key].filter(test => {
        if (test.id === id) {
          componentToCopy = testObject[key]
        }  
      })
    }

    
    if (btn === "buttonOd") {
      componentToCopy.map(test => {
        if (test.od.value !== "" && test.show) {
          inputText += `${test.name}: ${test.od.value}\n`
        }
      })
    } else if (btn === "buttonOs") {
      componentToCopy.map(test => {
        if (test.os.value !== "" && test.show) {
          inputText += `${test.name}: ${test.os.value}\n`
        }
      })
    }
    copyContent(inputText.trim());
  }

  const handleReset = (e, btn, id) => {
    e.preventDefault();
    let componentToReset;
    const testObject = {...tests}

    for (const key in testObject) {
      testObject[key].filter(test => {
        if (test.id === id) {
          componentToReset = testObject[key]
        }  
      })
    }
    if (btn === "resetOd") {
      componentToReset.forEach(test => {
        test.od.value = ""
      })
    } else if (btn === "resetOs") {
      componentToReset.forEach(test => {
        test.os.value = ""
      })
    }
    setTests(testObject);
  }

 

  
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
    <div className="hidden sm:flex absolute top-12 left-6 bg-purple-400 rounded-md shadow-2xl">
      <Eye className="cursor-pointer pr-2" />
      <Eye className="cursor-pointer pl-2" />
      <div className='text-lg px-1'>optoTools</div>
    </div>
    </div>
    <div className='text-center sm:text-right mb-10'>
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
      <div className='mb-28'>
      <h1 className='text-center text-3xl mb-5 mt-28'>
        Anterior
      </h1>
        <Template 
          handleUserInputChange={handleUserInputChange}
          handleTestChange={handleTestChange}
          handleCopyTest={handleCopyTest}
          handleReset={handleReset}
          tests={[...tests.anterior]}  
        />
      <h1 className='text-center text-3xl mb-5 mt-28'>
        Posterior
      </h1>
        <Template 
          handleUserInputChange={handleUserInputChange}
          handleTestChange={handleTestChange}
          handleCopyTest={handleCopyTest}
          handleReset={handleReset}
          tests={[...tests.posterior]}  
        />
        <br/>
        <br/>
        <br/>
        </div>}
      {route === "calculator" &&
      <>
      <h4 className='text-center text-3xl mb-5 mt-32'>
        Brillekalkulator
      </h4>
        <RadioRow
          handleOfferChange={handleOfferChange}
        />
        <PersonaliaInput
          personalia={personalia}
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
        <CommentInput 
          comment={personalia.comment}
          handlePersonaliaChange={handlePersonaliaChange}
        />
        <div className="md:w-[794px] md:h-[1123px] bg-white mx-auto mt-16 rounded">
        <div ref={componentRef} className="p-6 pt-40">
          <Personalia
            personalia={personalia}
            />
          <h5 className='text-center mt-14 font-bold'>Brille 1:</h5>
          <div className="flex justify-center mb-10">
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
          <p className='font-bold mt-20 text-center'>Kommentar: </p>
          <div className='text-center mt-4 w-3/4 border-2 border-black h-auto mx-auto break-words'>
            <p className='text-left p-3'>{personalia.comment}</p>
          </div>
        </div>
        </div>
        <div className='flex justify-center mb-40'>
          <button className='bg-green-800 text-slate-50 p-2 rounded mt-4 w-20'
            onClick={handlePrint}>
              Skriv ut
          </button>
        </div>
        </>} 
        </>
  )
}


export default App

const sampleTests = {
  anterior: 
  [
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
      },
      img: "src/assets/konjunktivalrodhet.png" 
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
      },
      img: "src/assets/limbalrodhet.png"
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
      },
      img: "src/assets/palpebralruhet.png"
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
      },
      img: "src/assets/meibomske.png"
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
      },
      img: "src/assets/blefaritt.png"
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
      },
      img: "src/assets/neovaskularisering.png"
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
    }  
  ],
  posterior: 
  [
    {
      id: uuidv4(),
      name: "C/D",
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
      name: "Papille",
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
      name: "A/V",
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
      name: "Makula",
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
      name: "Linse",
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
      name: "OCT-wide",
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
    }  
  ]
}