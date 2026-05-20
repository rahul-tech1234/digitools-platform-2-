import { useState } from 'react';
import { MdDone } from "react-icons/md";
const TransparentPricing = () => {
    
    const [cardSelecte,setCardSelect]=useState("Pro")
    return (     
<div className='mt-30 w-10/12 mx-auto'>
    <div className='text-center'>
    <h2 className='text-[48px] font-extrabold text-black'>Simple, Transparent Pricing</h2>
<p className='mb-10 font-light text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
</div>

<div className='flex sm:flex-col md:flex-row justify-center items-center gap-3'>
{/* 1st card */}
<div className={`card w-96 shadow-sm ${cardSelecte==="Starter"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-gray-100"}`} onClick={()=>setCardSelect("Starter")}>
  <div className="card-body">

    <span className="badge badge-xs bg-[#FEF3C6] text-[#BB4D00] absolute px-3 py-2.5 rounded-4xl -top-2 left-[40%]">Most Popular</span>
    <div className="space-y-2">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className={`${cardSelecte==="Starter"?"text-white":"text-[#627382]"}`}>Perfect for getting started</p>
      <p className={`mt-6 text-2xl font-bold  ${cardSelecte==="Starter"?"text-white":"text-black"}`}>$29<span className={`font-light text-[20px] ${cardSelecte==="Starter"?"text-white":"text-[#627382]"} `}>/mo</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className={`btn btn-primary btn-block rounded-4xl  ${cardSelecte==="Starter"?"bg-base-100 text-[#4F39F6]   ":"bg-linear-to-r from-[#4F39F6] to-[#9514FA] "}`}>Get Started Free</button>
    </div>
  </div>
</div>
{/* 2nd card */}

<div className={`card w-96 shadow-sm ${cardSelecte==="Pro"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-gray-100"}`} onClick={()=>setCardSelect("Pro")}>
  <div className="card-body">

   
    <span className="badge badge-xs bg-[#FEF3C6] text-[#BB4D00] absolute px-3 py-2.5 rounded-4xl -top-2 left-[40%]">Most Popular</span>
    <div className="space-y-2">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p className={`${cardSelecte==="Pro"?"text-white":"text-[#627382]"}`}>Perfect for getting started</p>
      <p className={`mt-6 text-2xl font-bold ${cardSelecte==="Pro"?"text-white":"text-black"}`}>$29<span className={`font-light text-[20px]  ${cardSelecte==="Pro"?"text-white":"text-[#627382]"}`}>/mo</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className={`btn btn-primary btn-block rounded-4xl  ${cardSelecte==="Pro"?"bg-base-100 text-[#4F39F6]   ":"bg-linear-to-r from-[#4F39F6] to-[#9514FA] "}`}>Start Pro Trial</button>
    </div>
  </div>
</div>
{/* 3rd card */}


<div className={`card shadow-sm w-96 ${cardSelecte==="Enterprise"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-gray-100"}`} onClick={()=>setCardSelect("Enterprise")}>
  <div className="card-body">

    
    <span className="badge badge-xs bg-[#FEF3C6] text-[#BB4D00] absolute px-3 py-2.5 rounded-4xl -top-2 left-[40%]">Most Popular</span>
    <div className="space-y-2">
      <h2 className="text-3xl font-bold">Enterprise</h2>
      <p className={`${cardSelecte==="Enterprise"?"text-white":"text-[#627382]"}`}>Perfect for getting started</p>
      <p className={`mt-6 text-2xl font-bold  ${cardSelecte==="Enterprise"?"text-white":"text-black"}`}>$29<span className={`font-light text-[20px]  ${cardSelecte==="Enterprise"?"text-white":"text-[#627382]"}`}>/mo</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      <li>
        <span className='flex gap-2 text-[13px]'><MdDone className='size-4 text-success'/>Access to 10 free tools</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className={`btn btn-primary btn-block rounded-4xl  ${cardSelecte==="Enterprise"?"bg-base-100 text-[#4F39F6]   ":"bg-linear-to-r from-[#4F39F6] to-[#9514FA] "}`}>Contact Sales</button>
    </div>
  </div>
</div>
</div>

</div>
    );
};

export default TransparentPricing;