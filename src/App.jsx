import Sidebar from "./components/shared/Sidebar"
import { useState } from "react"
import {RiMenu3Fill, RiAddLine, RiPieChartLine, RiUser3Line, RiCloseLine } from "react-icons/ri"
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrden, setShowOrden] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  return <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu}/>
     {/*menu movil*/}
     <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button className=" p-2"><RiUser3Line/></button>
      <button className=" p-2"><RiAddLine/></button>
      <button className=" p-2"><RiPieChartLine/></button>
      <button className="text-white p-2" onClick={toggleMenu}>
        {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}</button>
     </nav>
    </div>


}
export default App
