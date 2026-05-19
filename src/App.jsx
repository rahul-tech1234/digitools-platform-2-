import { Suspense } from 'react';
import './App.css'
import NavBar from "./components/NavBar/NavBar";

const fetchPrice=async()=>{
  const res=await fetch("/PricingData.json");
  return res.json();
}
function App() {
 const pricePromise=fetchPrice();
 //console.log(pricePromise)
 return (
    <>
    <Suspense fallback={<h2>ha</h2>}>
        <NavBar pricePromise={pricePromise}></NavBar>
        </Suspense>  
    </>
  )
}

export default App
