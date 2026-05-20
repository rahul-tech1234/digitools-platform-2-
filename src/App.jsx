import { Suspense, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Products from "./components/Prices/Products";
import StaticPricing from "./components/StaticPricing/StaticPricing";
import Empty from "./components/State/State";
import Banner from "./components/Banner/Banner";
import Create from "./components/Create/Create";
import Blank from "./components/Blank/Blank";
import Footer from "./components/Footer/Footer";
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
    <Banner></Banner>
    <Products PricePromise={PricePromise} setAddCard={setAddCard} addCard={addCard}></Products>
    <StaticPricing></StaticPricing>
    <Empty></Empty>
    <Create></Create>
    <Blank></Blank>
    <Footer></Footer>
    </Suspense>
    </>
  )
}

export default App
