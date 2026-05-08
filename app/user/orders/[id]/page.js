import React from 'react'

function page() {
  return (
    <div>
      <div className='grid  grid-col-2 gap-3 '> 
        {/* left */}
        <div className='flex flex-col-2 lg:col-span-3'>
            left
            </div>

            {/* right */}
            <div className='grid-col-2 '>
              right
            </div>
      </div>
    </div>
  )
}

export default page
