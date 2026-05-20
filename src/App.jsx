import { Suspense, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Products from "./components/Prices/Products";
const fetchPrice=async()=>{
  const res=await fetch("/PricingData.json");
  return res.json();
}
function App() { 
  const PricePromise=fetchPrice();
  const [addCard,setAddCard]=useState([]);
  return (
    <>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <NavBar addCard={addCard}></NavBar>
    <Products PricePromise={PricePromise} setAddCard={setAddCard} addCard={addCard}></Products>
    </Suspense>
    </>
  )
}

export default App
