import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
const Collection = () => {

  const {products} = useContext(ShopContext);
  const[showFilter, setShowFilter] = useState(false)
  
  
  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filters options */}
            <div className='min-w-60 '>
              <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-2xl flex items-center cursor-pointer gap-2'>FILTER
                <img className={`h-3 sm:hidden ${showFilter?'rotate-90': ''}`}src={assets.dropdown_icon} alt="" /></p> 

              {/* Category Filter */}

                    <div className={`border border-gray pl-5 py-3 mt-6 ${showFilter? " " : 'hidden'} sm:block`}>

                      <p className='text-sm font-medium mb-3 '>CATEGORIES</p>
                          
                            <div className='flex flex-col gap-2 text-sm font-light'>
                                  <p className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={'Men'}/> Men
                                  </p>
                                
                                  <p className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={'Women'}/>Women
                                  </p>

                                  <p className='flex gap-2'> 
                                    <input className='w-3' type="checkbox" value={'Kids'}/>Kids
                                  </p>
                            </div>
                    </div>
                                     
                               <div className={`border border-gray pl-5 py-3 mt-5 ${showFilter? '' : 'hidden'} sm:block `}>
                                <p className='text-sm font-medium mb-3'>TYPE</p>

                                <div className='flex flex-col gap-2 text-sm font-light'>
                                  <p className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={"Topwear"} />Topwear
                                  </p>

                                  <p className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={"Bottomwear"} />Bottomwear
                                  </p>

                                  <p className='flex gap-2'>
                                    <input className='w-3' type="checkbox" value={"Winterwear"} />Winterwear
                                  </p>

                                </div>
                               </div>

                                  
            </div>
    </div>
  )
}

export default Collection
