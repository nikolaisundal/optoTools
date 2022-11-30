import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Anterior from './components/Anterior'

function App() {
  const [tests, setTests] = useState(sampleTests);

  const handleTestChange = (id) => {
    const testArray = [...tests];
    const selctedTest = testArray.find(test => 
      test.id === id
    )
    selctedTest.show = !selctedTest.show
    setTests(testArray) 
  }
  return (
    <div className="">
      <h1 className='text-center text-3xl my-5'>Anterior</h1>
        <Anterior 
          handleTestChange={handleTestChange}
          tests={[...tests]}  
        />
    </div>
  )
}

export default App

const sampleTests = [
  {
    id: uuidv4(),
    name: "Konjunctival rødhet",
    show: true
  },
  {
    id: uuidv4(),
    name: "Limbal rødhet",
    show: true
  },
  {
    id: uuidv4(),
    name: "Palpebral rødhet",
    show: true
  },
  {
    id: uuidv4(),
    name: "Palpebral ruhet",
    show: true
  },
  {
    id: uuidv4(),
    name: "Meibomske kjertler",
    show: true
  },
  {
    id: uuidv4(),
    name: "Blefaritt",
    show: true
  },
  {
    id: uuidv4(),
    name: "Neovascularisering",
    show: true
  },
  {
    id: uuidv4(),
    name: "Kornea",
    show: true
  },
  {
    id: uuidv4(),
    name: "Kommentar",
    show: true
  },
]