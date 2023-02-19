import React from 'react'

export default function CommentInput({handlePersonaliaChange, comment}) {
  return (
    <div className='w-full justify-center flex mb-3 mt-6'>
      <form>
        <div className='grid grid-rows-1 md:grid-cols-9 xl:grid-cols-10 gap-2'>
            <div className='flex items-center'>
                <label 
                    className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                    htmlFor="comment">Kommentar:
                </label>
            </div> 
            <div></div>
          <div className='flex items-center md:col-span-6 xl:col-span-8'>    
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


/* <div className='w-full justify-center flex mb-3 mt-6'>
      <form>
        <div className='grid grid-cols-9 xl:grid-cols-10 gap-4'>
            <div className='flex items-center col-span-1'>
                <label 
                    className='text-gray-800 font-bold mb-1 whitespace-nowrap mr-2' 
                    htmlFor="comment">Kommentar:
                </label>
            </div> 
          <div></div>
          <div className='flex items-center col-span-7 xl:col-span-8'>    
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
} */