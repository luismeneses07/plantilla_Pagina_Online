import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";
import {
  RiMenu3Fill,
  RiAddLine,
  RiPieChartLine,
  RiUser3Line,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import Card from "./components/shared/Card";
import Product from "./components/shared/Product";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrden, setShowOrden] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrden(false);
  };

  const toggleOrder = () => {
    setShowOrden(!showOrden);
    setShowMenu(false);
  };

  const classBtn =
    "text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500";

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/*menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className=" p-2">
          <RiUser3Line />
        </button>
        <button className=" p-2">
          <RiAddLine />
        </button>
        <button className=" p-2" onClick={toggleOrder}>
          <RiPieChartLine />
        </button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
          <header className="">
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">CellFud</h1>
                <p className="text-gray-500">24 de Enero 2023</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
                  />
                </div>
              </form>
            </div>
            {/* Tabs*/}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href=""
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="" className="py-2 pr-4">
                Cold Dishes
              </a>
              <a href="" className="py-2 pr-4">
                Soup
              </a>
              <a href="" className="py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/*content*/}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] py-8 px-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="comida.png"
                alt="plato comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-2xl">Speacy sead</p>
              <span>$2.29</span>
              <p>20 comidas</p>
            </div>
            <Card
              img="comida.png"
              price="2.30"
              description="plato con comida"
            />
            <Card
              img="comida.png"
              price="2.30"
              description="plato con comida"
            />
            <Card
              img="comida.png"
              price="2.30"
              description="plato con comida"
            />
            <Card
              img="comida.png"
              price="2.30"
              description="plato con comida"
            />
            <Card
              img="comida.png"
              price="2.30"
              description="plato con comida"
            />
          </div>
        </div>
        <div
          className={`lg:col-span-2 fixed right-0 top-0 bg-[#1F1D2B] w-full h-full lg:w-80 lg:right-0 transition-all rounded-lg ${
            showOrden ? "right-0" : "-right-full"
          }`}
        >
          {/*orders */}
          <div className="relative pt-16 lg:pt-2 text-gray-300 p-8 h-full">
            <RiCloseLine
              onClick={toggleOrder}
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
              <div className="h-[400px] overflow-y-scroll md:h-[700px] lg:h-[550px]">
                {/* product */} 
                <Product/>
                <Product/>
                <Product/>
                <Product/>         
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
      </main>
    </div>
  );
}
export default App;
