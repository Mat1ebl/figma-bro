import React from "react"
import Coco from '../assets/coco.svg'
import Map  from "../assets/map.svg"


const chur =() => {
  return (
    <div className="bg-[#00113B] text-white flex justify-between">
        <div className="">
            <img className="pt-10 pl-[150px]" src={Coco} alt=""/>
            <div className="pl-[180px] pt-15">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
            <p className="text-[16px] pt-50 pl-50 text-[#ABAFC7]">© 2021 Creative Agency</p>
        </div>
        <div className="">
            <div className=" text-[25px] pt-15 pb-[80px]">Our Office</div>
            <img className="" src={Map} alt="" />
        </div>
        <div className="">
            <p className="text-[25px] pt-15 pb-[80px]">Contact</p>
            <p className="pb-[25px]">Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
            <p className="pb-[25px]">info@yourdomain.com</p>
            <p>+62 (0) 000 0000 00</p>
            <p className="mt-75 ml-30 text-[#ABAFC7]">Home</p>
            <p className="mt-[-25px] ml-50 text-[#ABAFC7]">Works</p>
            <p className="mt-[-25px] ml-70 text-[#ABAFC7]">About</p>
            <p className="mt-[-25px] ml-90 text-[#ABAFC7]d">Pricing</p>
        </div>
        
    </div>
)
}

export default chur