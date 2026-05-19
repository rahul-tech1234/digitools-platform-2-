import { use } from "react";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = ({pricePromise}) => {
    const Data=use(pricePromise);
    console.log(Data);
    return (
        
<div className="shadow-sm">
        <div className="navbar bg-base-100  w-10/12 mx-auto">
          
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className={`navbar-end flex gap-3 ${addCard.length===0?"":"indicator"}`}>
    <a href="#" className="relative"><FiShoppingCart className="size-5 font-bold" /> 
    <span className={`${addCard.length!==0 ?"indicator-item bg-red-500 text-white w-5 h-5 text-center rounded-full":""}`}>{addCard.length===0 ?"":addCard.length}</span>
   
    </a>
   
    <a href="#" className="font-normal text-[16px]">Login</a>
    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">Get Started</a>
  </div>
  <div/>
</div>
</div>


    );
};

export default NavBar;