import React from 'react'
import { ArrowRight } from 'lucide-react';

const project = () => {
    return (
        <div className=''>
            <div className="bg-[url(src/assets/Kaks.svg)]  bg-no-repeat mt-120 ml-100 items-center align-middle text-center justify-center flex">
            <p className='text-white text-[34px] mt-[-450px] ml-10 text-center justify-center font-semibold'>Start a New Project</p>
            <p className='text-white text-[42px] ml-90 mt-200 font-semibold'></p>
            <a href="" className='bg-[#4c40f7] rounded-2xl text-white px-[70px] absolute w-70 h-20 ml-[-350px] mt-[-100px] '>
                <p className='font-semibold text-[20px] mt-5 ml-[-100px]'>Start Now</p>
                <div className="ml-[130px] mt-[-25px]">
                    <ArrowRight/>
                </div>
            </a>
            <div className='ready'>
                <p className='text-[16px] font-medium mt-[-340px] ml-[-1100px] text-white'>Are You Ready For</p>
            </div>
            </div>
        </div>

    )
}

export default project