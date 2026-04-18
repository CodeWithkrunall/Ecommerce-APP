import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {

  const {products} = useContext(ShopContext);
  const[showFilter, setShowFilter] = useState(false)
  
  
  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filters options */}
      <div className='min-w-60'>
        <p className='my-2 text-2xl flex items-center cursor-pointer gap-2'>FILTER</p>

        {/* Category Filter */}

          <div className={`border border-gray pl-5 py-3 mt-6 ${'showFilter? " " : "hidden"'}`}>

          </div>
      </div>
    </div>
  )
}

export default Collection
