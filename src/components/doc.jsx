import React from 'react'
import Ludi from '../assets/Ludi.svg'

const doc = () => {
    return (
        <div className="bg-[url(src/assets/fonchik.svg)] bg-no-repeat bg-cover">
            <div className='text-[#ff2d59] font-medium text-2xl text-center mt-30'>
                <p className='font-semibold'>Our Documentation</p>
            </div>
            <div className='text-black font-medium text-center mt-7'>
                <p className='font-semibold'>See what our profile is like and how we work for your business</p>
            </div>
            <div className=''>
                <img src={Ludi} alt='' className='m-auto mt-20'/>
            </div>
        </div>
    )
}

export default doc