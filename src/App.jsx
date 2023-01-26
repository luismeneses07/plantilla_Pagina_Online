import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";
import {
  RiMenu3Fill,
  RiAddLine,
  RiPieChartLine,
  RiUser3Line,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
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
      <Car showOrden={showOrden} setShowOrden={setShowOrden} />
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
      <main className="lg:pl-32 lg:pr-80  pb-20">
        <div className="md:p-8 p-4">
          <Header />
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
            <Card
              img="comida.png"
              price="2.30"
              description="plato con comida"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
