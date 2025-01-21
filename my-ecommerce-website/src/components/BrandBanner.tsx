import React from 'react'
import Image from 'next/image'
const BrandBanner = () => {
  return (
    <div className='bg-black flex px-10 py-8 justify-between  xs:flex-wrap'>
        <Image  alt='vector' src="/images/Vector.png" width={166} height={33}  className='xs:w-8 xs:h-8 md:w-12 md:h-12 lg:w-24 lg:h-24'></Image>
        <Image alt='zara' src="/images/zara-logo-1 1.png" width={91} height={33} className='xs:w-8 xs:h-8 md:w-12 md:h-12 lg:w-24 lg:h-24'></Image>
        <Image alt='gucci' src="/images/gucci-logo-1 1.png" width={156} height={33} className='xs:w-8 xs:h-8 md:w-12 md:h-12 lg:w-24 lg:h-24'></Image>
        <Image alt='parada' src="/images/prada-logo-1 1.png" width={194} height={32} className='xs:w-8 xs:h-8  md:w-12 md:h-12 lg:w-28 lg:h-28'></Image>
        <Image alt='calvinKlein' src="/images/Group.png" width={206} height={33} className='xs:w-10 xs:h-8'></Image>
    </div>
  )
}

export default BrandBanner