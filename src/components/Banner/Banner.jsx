import { useState } from 'react';
import BannerImg from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";
import { GoSun } from "react-icons/go";
const Banner = () => {
    const [tab,setTab]=useState("Get Started");
    return (
        
<div className="hero bg-base-200 min-h-screen w-10/12 mx-auto mt-5">
  <div className="hero-content flex-col lg:flex-row-reverse px-9">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        
        <p className='flex text-[#4F39F6] bg-blue-200 rounded-4xl px-3 py-1 w-75 gap-2'><GoSun className='w-3.5 mt-1' />New: AI-Powered Tools Available</p>
        
      <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
      </p>
      <div className='flex gap-2'>
        <p><a className={`  ${tab==="Get Started"?"from-[#4F39F6] to-[#9514FA]":"border border-green-400 text-[#4F39F6]!"} 
           text-white btn bg-linear-to-r rounded-4xl px-5`}
          onClick={()=>{setTab("Get Started")}}
          >Get Started</a></p>
          <p><a className={`${tab==="Watch Demo" ? "from-[#4F39F6] to-[#9514FA]":"border border-green-400 text-[#4F39F6]!"} 
           text-white btn bg-linear-to-r rounded-4xl px-5`
           }
           onClick={()=>{setTab("Watch Demo")}}><FaPlay /> Watch Demo</a></p>
          
      </div>
        
    </div>
  </div>
</div>
    );
};

export default Banner;