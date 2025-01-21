import React from 'react'

const DressStyleGrid = () => {


      return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-300 rounded-md">
          <h1 className="text-4xl font-extrabold text-center mb-6">Browse by Dress Style</h1>
          <div className='grid grid-cols-3 gap-x-10 gap-y-10 w-[80%] mx-auto my-14 xs:flex xs:flex-col xs:gap-4 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-5'>
            <div className='relative md:h-[200px] :h-[289px] xs:h-[150px] md:col-span-1 md:row-span-1 border-white bg-white rounded-[10px] border-2 pl-7'>
                <img src="/images/image 11.png" alt="" className=' h-[100%]'/>
                <h1  className='absolute top-8 left-8 text-2xl font-bold'>Casual</h1>
            </div>
            <div className='relative md:h-[200px] h-[289px] xs:h-[150px] md:col-span-2 bg-white border-white rounded-[10px] md:row-span-1 border-2'>
            <img src="/images/image 13.png" alt="" className=' h-[100%] lg:absolute lg:right-0'/>
                <h1 className='absolute top-8 left-8 text-2xl font-bold'>Formal</h1>
            </div>
            <div className='relative md:h-[200px] h-[289px] xs:h-[150px] md:col-span-2 bg-white border-white rounded-[10px] md:row-span-1 border-2'>
            <img src="/images/image 12.png" alt="" className=' h-[100%] absolute right-0'/>
                <h1  className='absolute top-8 left-8 text-2xl font-bold'>Party</h1>
            </div>
            <div className='relative md:h-[200px] h-[289px] xs:h-[150px] md:col-span-1 bg-white border-white rounded-[10px] md:row-span-1 border-2'>
            <img src="/images/image 14.png" alt="" className=' h-[100%]'/>               
             <h1 className='absolute top-8 left-8 text-2xl font-bold'>Gym</h1>
            </div>
          </div>
        </div>
      )
}

export default DressStyleGrid