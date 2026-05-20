import { FiShoppingCart } from "react-icons/fi";
const Empty = () => {
    return (
        <div className="card card-border bg-white py-9 flex justify-center items-center">
            <div className="card-body py-7 ">
            <FiShoppingCart className="text-[#627382] size-10 ml-8" />
            <p className="text-[#627382]">Your Cart is empty</p>
            </div>
        </div>
    );
};

export default Empty;