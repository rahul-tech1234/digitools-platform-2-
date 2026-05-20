import Empty from "../Empty/Empty";
import { toast } from "react-toastify";
toast
const SingleCard = ({total,addCard,setTotal,setAddCard}) => {
   const removeCard=(select)=>{
        const filterCard=addCard.filter(delet=>select.name!==delet.name);
        setTotal(total-select.price);
        //console.log(select.price)
        //console.log(filterCard);
        setAddCard(filterCard);
        toast.warning("Remove this Card form your card");
   };
   const clearAllData=()=>{
        setAddCard([]);
        setTotal(0);
        toast.error("Remove All Data from this Cart!");
   }
    return (
        <div className="card card-border bg-base-300 mt-4">
  <div className="card-body space-y-3">
    <h2 className="card-title">Your Card</h2>
   {addCard.length===0?<Empty></Empty>:
    addCard.map(select=>{
        return(
            <div key={select.id} className="card-body bg-white rounded-2xl">
            <div className="flex justify-between">
            <div className="flex justyfy-start gap-4">
            <img src={select.img} className="w-5" alt="" />
            <div>
            <h2 className="card-title">{select.name}</h2>
            <p className="#627382">${select.price}</p>
            </div>
            </div>
            <button className="text-[#FF3980]" onClick={()=>removeCard(select)}>Remove</button>
        </div>
    </div>
        );
    })
   }
    
   
    <div className="flex gap-[80%]">
        <p className="text-[#627382]">Total:</p>
        <p>${total}</p>
    </div>
   {
    addCard.length===0?""
    :<div>
      <button className="
      btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-4xl w-11/12 mx-auto ml-6 " onClick={clearAllData}>Proceed to Checkout</button>
      </div>
   } 
    
    
  </div>
</div>
    );
};

export default SingleCard;