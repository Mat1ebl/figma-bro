import React from 'react'
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
const questions = () => {
    return (
        <div className="">
            <div className='bg-[url(src/assets/krugi.png)] bg-no-repeat bg-cover'>
            </div>
                    <div className='text-[#ff2d59] font-medium text-[20px] text-center mt-30 font-semibold'>
                        <p>Frequently Ask Question</p>
                    </div>
                    <div className='text-black font-medium text-center mt-7 font-semibold'>
                        <p className='text-[42px]'>Some of our frequently asked questions</p>
                    </div>
                    <div className='w-[1120px] h-[240px] ml-100 bg-white rounded-2xl shadow-xl shadow-indigo-900/90 border-2 border-[#4C40F7]'>
                        <p className='text-black text-[16] ml-5 mt-5 absolute'>What are the services provided to customers?</p>
                        <p className='text-black text text-[18] mt-20 ml-5'>Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs,<br/>develop websites and mobile applications, provide support for the growth of business ideas, to help customers<br/>market their products online through the marketplace.</p>
                    </div>
                    <div className='ml-360 mt-[-215px]'>
                        <ChevronUp />
                    </div>
                     <div className='w-[1120px] h-[88px] ml-100 mt-60 bg-white rounded-2xl shadow-xl shadow-indigo-900/90 border-2 border-[#4C40F7]'>
                        <p className='text-black text-[16] ml-5 mt-5 absolute'>How can I submit a proposal for cooperation?</p>
                    </div>
                    <div className='ml-360 mt-[-55px]'>
                        <ChevronDown />
                    </div>
                    <div className='w-[1120px] h-[88px] ml-100 mt-20 bg-white rounded-2xl shadow-xl shadow-indigo-900/90 border-2 border-[#4C40F7]'>
                        <p className='text-black text-[16] ml-5 mt-5 absolute'>I come from a faraway place, can collaboration be done full time online through several meeting applications?</p>
                    </div>
                    <div className='ml-360 mt-[-55px]'>
                        <ChevronDown />
                    </div>
                    <div className='w-[1120px] h-[88px] ml-100 mt-20 bg-white rounded-2xl shadow-xl shadow-indigo-900/90 border-2 border-[#4C40F7]'>
                        <p className='text-black text-[16] ml-5 mt-5 absolute'>How do I get the payment complete?</p>
                    </div>
                    <div className='ml-360 mt-[-55px]'>
                        <ChevronDown />
                    </div>
                    <div className='w-[1120px] h-[88px] ml-100 mt-20 bg-white rounded-2xl shadow-xl shadow-indigo-900/90 border-2 border-[#4C40F7]'>
                        <p className='text-black text-[16] ml-5 mt-5 absolute'>How long can the collaboration last?</p>
                    </div>
                    <div className='ml-360 mt-[-55px]'>
                        <ChevronDown />
                    </div>
                </div>
    )
}

export default questions