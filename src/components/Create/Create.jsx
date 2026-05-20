import User from "../../assets/user.png";
import Pack from "../../assets/package.png";
import Rock from "../../assets/rocket.png";
const Create = () => {
    return (
        <div className="card-body w-10/12 mx-auto mt-20">
                <h2 className="text-3xl font-bold text-center">Get Started in 3 Steps</h2>
                <p className="text-[#627382] text-center">Start using premium digital tools in minutes, not hours.</p>
                <div className="flex flex-col md:flex-row mt-5 justify-center gap-4 items-center ">
{/* 1st */}
<div className="card card-border bg-base-300 w-96 py-10">
  <div className="card-body text-center space-x-0">
    <span className="w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 rounded-full absolute top-5 right-5">01</span>
    
    <img src={User} className="w-10 mx-auto bg-[#a89db1] p-1 rounded-full" alt="" />
    
    <h2 className="card-title mx-auto">Create Account</h2>
    <p className="text-[#627382] text-center">Sign up for free in seconds. No credit card <br /> required to get started.</p>
  </div>
</div>
{/* 2nd */}
<div className="card card-border bg-base-300 w-96 py-10">
  <div className="card-body text-center space-x-0">
    <span className="w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 rounded-full absolute top-5 right-5">02</span>
    <img src={Pack} className="w-10 mx-auto bg-[#a89db1] p-1 rounded-full" alt="" />
    <h2 className="card-title mx-auto">Create Account</h2>
    <p className="text-[#627382] text-center">Sign up for free in seconds. No credit card <br /> required to get started.</p>
  </div>
</div>

{/* 3rd */}
<div className="card card-border bg-base-300 w-96 py-10">
  <div className="card-body text-center space-x-0">
    <span className="w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 rounded-full absolute top-5 right-5">01</span>
    <img src={Rock} className="w-10 mx-auto bg-[#a89db1] p-1 rounded-full" alt="" />
    <h2 className="card-title mx-auto">Create Account</h2>
    <p className="text-[#627382] text-center">Sign up for free in seconds. No credit card <br /> required to get started.</p>
  </div>
</div>
</div>
           
                
                
            </div>
      
    );
};

export default Create;