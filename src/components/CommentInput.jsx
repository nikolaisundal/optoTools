import React from 'react'

export default function CommentInput({handlePersonaliaChange, comment}) {
  return (
    <div className='w-full justify-center flex mb-3 mt-6'>
      <form>
        <div className='grid grid-rows-1 md:grid-cols-9  gap-2'>
            <div className='flex items-center'>
                <label 
                    className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                    htmlFor="comment">Kommentar:
                </label>
            </div> 
            <div></div>
          <div className='flex items-center md:col-span-7'>    
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
    </div>
  )
}


