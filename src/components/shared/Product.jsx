import React from 'react';
import {
    RiDeleteBin6Line
  } from "react-icons/ri";

const Product = () => {
    return (
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6 mb-2">
            {/* product description */}
            <div className="col-span-4 flex items-center gap-3">
              <img
                src="comida.png"
                alt="comidad"
                className="w-10 h-10 object-cover"
              />
              <div>
                <h5 className="text-sm">Spaicy</h5>
                <p className="text-xs text-gray-300">$2.38</p>
              </div>
            </div>
            {/* Qty */}
            <div>
              <span>2</span>
            </div>
            {/* price */}
            <div>
              <span>$4.76</span>
            </div>
          </div>
          {/* Note */}
          <div className="grid grid-cols-6 items-center gap-2" >
            <form className="col-span-5">
              <input type="text" className="bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none" placeholder="Order Note" />
            </form>
            <div className="text-center">
              <button className="border border-red-500 p-2 rounded-lg">
              <RiDeleteBin6Line className="text-red-500"/>
              </button>
            </div>
          </div>
        </div>
    );
};

export default Product;