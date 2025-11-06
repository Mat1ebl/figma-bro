import React from 'react'
import Customers from '../assets/Customers.svg'

const cust = () => {
    return (
        <div className=''>
            <div className=' '>
                <p className='text-[#FF2D59] text-[20px] text-center mt-320 font-semibold'>Some of Our Great Customers</p>
                <p className='text-[42px] text-center font-semibold'>Some of the companies we have worked with</p>
            </div>
            <img src={Customers} className='ml-140 mt-20 absolute'></img>
        </div>
    )
}

export default cust