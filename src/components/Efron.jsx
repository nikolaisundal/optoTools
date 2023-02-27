import React, {useState} from 'react'
import ScaleNum from './ScaleNum';
import { v4 as uuidv4 } from 'uuid';

export default function Efron({id, name, eye, handleUserInputChange, img}) {

  const [isHovering, setIsHovering] = useState(false);
  const scaleNumArray = [0.0,0.5,1.0,1.5,2.0,2.5,3.0,3.5,4]

  return (
    (name === "Kornea" || name === "Kommentar") ?
    <>      
      <div className='flex items-center justify-center sm:justify-start'>
        <label className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
          htmlFor={name}>{name}:
        </label>
      </div>
      <div className='flex items-center col-span-3'>    
          <textarea 
            className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight' 
            id={id} 
            name={name}
            value={eye.value}
            onChange={(e) =>handleUserInputChange(e, eye.id, id)}
            rows="2" 
            cols="50">
          </textarea>
      </div>    
    </>:
    <>   
      <div className='flex items-center justify-center sm:justify-start'>
          <label 
              className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
              htmlFor={name}>{name}:
          </label>
      </div>
      <div className='flex items-center col-span-3 relative'>    
          <input 
              className='appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight'
              autoComplete='off' 
              type="text" 
              id={id}
              name={name}
              value={eye.value}
              onFocus={() =>setIsHovering(true)}
              onClick={() =>setIsHovering(true)}
              onBlur={() =>setIsHovering(false)} 
              onChange={(e) =>handleUserInputChange(e, eye.id, id)} 
              />
          {isHovering && img &&(
        <div  className="absolute top-10 left-0 z-10">
        <div className='bg-white rounded-lg border-2 border-gray-200'>
            <div className='background_numscale_row w-full h-8 rounded-t-lg flex justify-evenly text-slate-50 pt-1 px-2'>
              {scaleNumArray.map(number=>(
                <ScaleNum
                  number={number}
                  eyeId={eye.id}
                  id={id}
                  handleUserInputChange={handleUserInputChange}
                  setIsHovering={setIsHovering}
                  key={uuidv4()}
                />)
                )
                }
              </div>
              <img
                className='rounded-b-lg'
                src={import.meta.env.BASE_URL + img}
                alt={name}
              />
              </div>
              <div className='text-right flex justify-center'>
                  <div className='hover:cursor-pointer border border-gray-200 w-12 h-6 rounded-b-full relative text-white hover:text-black bg-green-800 hover:bg-[#86EFAC]'>
                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl pb-1'>
                      &times;
                    {/*
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                      https://fontawesome.com/v5/docs/web/use-with/react */}
                    </span>
                  </div> 
                </div>
              </div>
            ) 
          }
      </div>
    </>
  )
}

/* <div className='w-full h-8 bg-green-800 rounded-t-lg flex justify-evenly text-slate-50 pt-1 px-2'>
            {scaleNumArray.map(num=>(<ScaleNum
              num={num}
              handleUserInputChange={handleUserInputChange}
              eyeId={eye.id}
              id={id}
              key={uuidv4()}
            />)
            )
            }
          </div> */