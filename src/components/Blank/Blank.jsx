import { useState } from "react";

const Blank = () => {
const [view,setVies]=useState("yes");
    return (
        <div className="w-10/12 ml-29 bg-linear-to-r from-[#4F39F6] to-[#9514FA] stats shadow my-9">
  <div className="stat py-8">
    <div className="stat-value text-white text-center">Ready to Transform Your Workflow?</div>
    <div className="stat-title text-white text-center">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</div>
    
    <div className="flex justify-center items-center gap-2 mt-2">
    <button className={`btn rounded-4xl ${view==="yes"?"bg-white text-black":"text-[white] bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`} onClick={()=>setVies("yes")}>Explore Products</button>
    <button className={`btn rounded-4xl ${view==="no"?"bg-white text-black":"text-[white] bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} `} onClick={()=>setVies("no")}>View Pricing</button>
    </div>
    <p className="text-center text-[white] mt-5">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
</div>
    );
};

export default Blank;