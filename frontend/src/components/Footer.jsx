import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Labore quo dolore praesentium fugiat dolorem illo ratione quia. 
                Illum, nostrum voluptatum?</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap=1 text-gray-800'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy olicy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'></p>
                <ul className='flex flex-col gap-1 text-gray-800'>
                    <li>+91 7621017477</li>
                    <li>Rathod.Krunal.Rk@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'> 
                Copyright 2024@ forever.com - All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
