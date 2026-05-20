import { AiFillInstagram} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
<footer>
<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex justify-around ">
            <div></div>
  <nav>
    <h1 className="card-title text-3xl font-bold">Digitools</h1>
    <a className="link link-hover">Premium digital tools for creators, <br /> professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</a>
    
  </nav>
  <nav>
    <h6 className="card-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="card-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="card-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
   <nav>
    <h6 className="card-title">Social Links</h6>
    <div className="flex gap-2">
    <a className="link link-hover bg-white rounded-full"><AiFillInstagram  
    className="size-8 text-[black]"/></a>
    <a className="link link-hover bg-white rounded-full"><FaFacebook 
    className="size-8 text-[black]"/></a>
    <a className="link link-hover bg-white rounded-full"><FaXTwitter 
    className="size-8 text-[black]"/></a>
    </div>
  </nav>
  
</footer>
<div className="h-px bg-gray-50 w-10/12 mx-auto"></div>
  <div className="flex justify-around bg-black text-[#627382] py-4">
  <p class>© 2026 Digitools. All rights reserved.</p>
  <div className="flex justify-between">
    <p>Privacy Policy</p>
    <p>Terms of Service</p>
    <p>Cookies</p>
  </div>
  </div>
</footer>
    );
};

export default Footer;