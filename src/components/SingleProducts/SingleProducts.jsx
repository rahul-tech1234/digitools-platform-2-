//import { useState } from "react";
//import { MdDone } from "react-icons/md";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
const SingleProducts = ({PriceData,setAddCard,addCard,total,setTotal}) => 
    
    {
   
    return (
        <div className="grid md:grid-cols-3 space-x-5 space-y-7 mt-10">
      {
        PriceData.map(Data=>{
            return(
                <SingleProductCard 
                key={Data.id} 
                Data={Data}
                setAddCard={setAddCard}
                addCard={addCard}
                total={total}
                setTotal={setTotal}></SingleProductCard>
            )
        })
      }
      </div>
    );
};

export default SingleProducts;