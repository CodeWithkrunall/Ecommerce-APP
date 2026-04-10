import React, { useContext } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    console.log(products)
  return (
    <div>

    </div>
  )
}

export default LatestCollection
