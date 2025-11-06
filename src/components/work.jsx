import React from 'react'
import Zal from '../assets/Zal.png'
import Discus from '../assets/Discus.png'
import Skaf from '../assets/Skaf.png'
import Divan from '../assets/Divan.png'
import Kryjka from '../assets/Kryjka.png'
import Styl from '../assets/Styl.png'
const work = () => {
    return (
        <div className=''>
                    <div className='flex'>
                        <div className=''>
                            <div className='absolut text-[20px] mt-380 ml-215 font-semibold'>
                                <p className='text-[#FF3B2F]'>Working space</p>
                            </div>
                            <div className='absolut text-[42px] mt-5 ml-135 font-semibold'>
                                <p className='text-center'>Let’s meet our interior room decoration</p>
                            </div>
                            <img src={Zal} className='ml-100 mt-20 absolute'></img>
                            <img src={Discus} className='ml-200 mt-20 absolute'></img>
                            <img src={Skaf} className='ml-300 mt-20 absolute'></img>
                            <img src={Divan} className='ml-100 mt-125 absolute'></img>
                            <img src={Kryjka} className='ml-200 mt-160 absolute'></img>
                            <img src={Styl} className='ml-300 mt-140 absolute'></img>
                        </div>
                    </div>
                </div>
    )
}
export default work