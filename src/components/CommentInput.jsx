import React from 'react'

export default function CommentInput({handlePersonaliaChange, comment}) {
  return (
    <form>
      <div className='w-[700px] mx-auto flex mb-3 mt-8 justify-center'>
          <div className='w-32'>
              <label 
                  className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                  htmlFor="comment">Kommentar:
              </label>
          </div> 
          <div className='w-[530px]'>    
            <textarea 
                className='appearance-none resize-none border-2 border-gray-200 rounded-lg w-full py-2 px-1 text-gray-700 leading-tight' 
                type="text" 
                name="comment"
                id="comment"
                placeholder='Skriv en kommentar'
                value={comment}
                onChange={(e) => handlePersonaliaChange(e)}
                />
          </div>
      </div>
    </form>
  )
}


