import { use, useState } from "react";
import SingleProducts from "../SingleProducts/SingleProducts";
//import SingleCard from "../SingleCard/SingleCard";
const Products = ({PricePromise}) => {
    const PriceData=use(PricePromise);
    const [selectbtn,setSelectbtn]=useState("Products")
    //console.log(PriceData);
    return (
        <div className="mt-25 w-10/12 mx-auto">
            <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="flex gap-2 justify-center items-center">
                    <button className={`${selectbtn==="Products"
                    ?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white px-2 py-1":""}`} onClick={()=>{setSelectbtn("Products")}}>Products</button>
                    <button className={`${selectbtn==="Cart"
                    ?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white px-3 py-1"
                        :""}`} onClick={()=>{setSelectbtn("Cart")}}>Cart(0)</button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 space-x-3 space-y-3 mt-10">
            {
                PriceData.map(Data=>{
                   return(
                    //<h1>Data.name</h1>
                     <SingleProducts key={Data.id} Data={Data}></SingleProducts>
                   );
                }) 
            }
        </div>
        </div>
    );
};

export default Products;