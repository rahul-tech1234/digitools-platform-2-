import { MdDone } from "react-icons/md";
const SingleProducts = ({Data}) => {
    console.log(Data)
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <span className={`badge badge-xs border-none ${Data.tag==="new"?"bg-amber-100 text-[#BB4D00]":
    Data.tag==="popular"?"bg-blue-100 text-blue-500":"bg-green-100 text-green-600"}  
    rounded-full px-3 py-2.5 text-[14px] badge-warning absolute top-4 right-4`}>{Data.tag}</span>
    
    <img src={Data.img} alt="" className="w-[10%] border-2 border-gray-200 rounded-full  p-2" />
    
    
      <h2 className="text-3xl font-bold">{Data.name}</h2>
      <span className="text-xl">$29<span className="text-[#627382]">/mo</span></span>
      <p className="text-[#627382]">{Data.description}</p>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
    {
        Data.features.map((list,i)=>{
            return(
                <li key={i}>
        <span className="text-[16px] text-[##627382]"><MdDone className="size-4 text-[green] inline-block mr-3 " />{list}</span>
      </li>
      
            );
        })
    }
      
    </ul>
    <div className="mt-6">
      <button className=
      "btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[white] rounded-4xl">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default SingleProducts;