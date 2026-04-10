import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Collection from '../pages/Collection'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const[latestProducts,setLatestProducts] =useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
        <div className='py-8 text-center text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTION"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore the newest arrivals crafted with modern design and timeless elegance for every occasion.
            </p>

        </div>
    </div>
  )
}
export default LatestCollection
