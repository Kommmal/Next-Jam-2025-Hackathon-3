import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='bg-gray-300'>
      <div className='flex flex-col sm:flex-row w-[85%] justify-between mx-auto items-center py-10'>
        <div className="left sm:w-[50%]">
          <h1 className='text-4xl sm:text-6xl font-bold mb-4'>
            FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE
          </h1>
          <p className='my-4 text-sm sm:text-base'>
            Browse through our diverse range of meticulously crafted garments, designed <br />
            to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <button className='border-2 border-black text-white px-12 py-2 rounded-[40px] bg-black'>
              Shop Now
            </button>
          </div>
          <div className='flex flex-wrap sm:flex-row sm:items-center justify-between mt-10'>
            <div className='sm:w-[30%]'>
              <h1 className='text-2xl sm:text-4xl'>200+</h1>
              <p className='text-xs sm:text-base'>International Brands</p>
            </div>
            <div className='sm:w-[30%]'>
              <h1 className='text-2xl sm:text-4xl'>2,000+</h1>
              <p className='text-xs sm:text-base'>High-Quality Products</p>
            </div>
            <div className='sm:w-[30%]'>
              <h1 className='text-2xl sm:text-4xl'>30,000+</h1>
              <p className='text-xs sm:text-base'>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="right sm:w-[50%] mt-8 sm:mt-0">
          <Image 
            src="/images/Rectangle_2__1_-removebg-preview.png" 
            alt="Clothing" 
            width={600} 
            height={660}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
