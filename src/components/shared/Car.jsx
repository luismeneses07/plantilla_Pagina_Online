import React from "react";
import {
  RiCloseLine,
} from "react-icons/ri";
import Product from "./Product";
{/* Desing Car */}
const Car = (props) => {
  const { showOrden , setShowOrden } = props;
  const classBtn =
    "text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500";
  return (
    <div
      className={`lg:col-span-2 fixed right-0 top-0 bg-[#1F1D2B] w-full h-full lg:w-80 lg:right-0 transition-all rounded-lg z-50 ${
        showOrden ? "right-0" : "-right-full"
      }`}
    >
      {/*orders */}
      <div className="relative pt-16 lg:pt-2 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrden(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Order #124355</h1>
        {/* pilss */}
        <div className="flex flex-wrap items-center gap-4 mb-4 lg:gap-4">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl lg:px-2">
            Diner in
          </button>
          <button className={classBtn}>To Go</button>
          <button className="text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500 lg:px-2">
            Delivery
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] overflow-y-scroll scrollbar md:h-[700px] lg:h-[550px]">
            {/* product */}
            <Product eat="Speacy" price="$2.25" inventory="2" total="$4.50"/>
            <Product eat="Speacy" price="$2.25" inventory="2" total="$4.50"/>
            <Product eat="Speacy" price="$2.25" inventory="2" total="$4.50"/>
            <Product eat="Speacy" price="$2.25" inventory="2" total="$4.50"/>
            <Product eat="Speacy" price="$2.25" inventory="2" total="$4.50"/>
          </div>
        </div>
        {/*sumit paymet*/}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$4.76</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] text-white w-full py-2 px-4 rounded-lg">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;

