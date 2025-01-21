import React from 'react'
import Home from './Home/page'
import BrandBanner from '@/components/BrandBanner'
import NewArrivals from '@/components/NewArrivals/NewArrivals'
import TopSelling from '@/components/TopSelling/TopSelling'
import DressStyleGrid from '@/components/DressStyleGrid'
import Customer from '@/components/Customer'


const page = () => {
  return (
    <div className='overflow-x-hidden'>
      
      <Home />
      <BrandBanner />
      <NewArrivals />
      <TopSelling />
      <DressStyleGrid />
      <Customer />
      
    </div>
  )
}

export default page