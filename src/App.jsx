import { Suspense } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Products from "./components/Prices/Products";
const fetchPrice=async()=>{
  const res=await fetch("/PricingData.json");
  return res.json();
}
function App() { 
  const PricePromise=fetchPrice();
  return (
    <>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <NavBar></NavBar>
    <Products PricePromise={PricePromise}></Products>
    </Suspense>
    </>
  )
}

export default App
