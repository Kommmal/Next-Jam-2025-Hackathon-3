import React  from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const HeaderTop = () => {
  return (
    <div className="bg-black w-full">
      <div className="xl:flex text-white xl:items-center xl:justify-between xl:ml-auto xl:mr-8 xl:w-[60%] h-[7vh] sm-ml-1 sm:w-full sm:px-4 sm:h-[10vh] sm:my-2 md:flex md:gap-2 sm:mr-0 sm:justify-center sm:text-center xs:mx-auto xs:w-[85%] xs:items-center ">
        <div className="xl:flex xl:gap-2 sm:flex sm:items-center xs:items-center xs:gap-2 sm:gap-4 md:flex md:gap-2 xs:flex">
          <p className="text-xl xs:text-[10px] sm:text-base  md:text-lg lg:text-xl">Signup and get 20% off to your first order.</p>
          <p className="underline xs:text-[10px] xs:font-normal font-bold text-[8px] sm:text-base md:text-lg lg:text-xl">Sign Up Now</p>
        </div>
        <div className="header-top-right sm:hidden lg:block xs:hidden ">
          <AiOutlineClose size={20} />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
