import axios from "axios";
import { ArrowDown, Bell, FilterIcon, Lightbulb, LogOut, Menu, PersonStanding, Plus, Settings, Settings2, Sun } from "lucide-react";
import {  useRef, useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header({ toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(false)

  const navigate = useNavigate()

   const menuRef = useRef()
      const imgRef = useRef()

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current ) {
      setOpenMenu(false)
    }
    })
  const handleLogout = async() => {
 try {
   const res = await axios.get("http://localhost:4000/user/logout")
   toast.success(res.data.message)
   navigate("/")
 } catch (error) {
  toast.error(error.res.data.message)
 }
  }
  // const menus = [
  //   {
  //     name: "profile",
  //     icon: PersonStanding,
  //   },

  //   {
  //     name: "setting",
  //     icon: Settings2,
  //   },

  //   {
  //     name: "logout",
  //     icon: LogOut,
  //   },
  // ]
  return (
    <>

    <header className="bg-white  p-3 flex justify-between items-center shadow-md border-l border-r-slate-600">
      <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
        <Menu className="w-6 h-6" />
      </button>
      <div className="hidden md:block">
        <h1 className="">Dashboard</h1>
        <p className="text-sm text-slate-500">Welcome back to Dashboard</p>
      </div>
      <div className="flex-1 max-w-md mx-8 relative">

        <div className="flex items-center  rounded-xl bg-white border">
        <CiSearch  className="w-6 h-6  left-3 top-1/2 ml-3 text-black"/>
          <input type="text" placeholder="Search anything here" className="w-full pl-10 pr-4 py-2.5 outline-none  text-gray-600 placeholder:text-black" />
          <div className="absolute right-2">
            <FilterIcon className="text-gray-600"size={16}/>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 md:mr-8 mr-3">
        <button className="hidden lg:flex space-x-1 py-1 px-3 bg-green-700 text-white rounded-lg" >
          <Plus />
          <span>New</span>
        </button>

          <button>
            <Sun/>
        </button>

        <button className="relative p-2.5">
          <Bell className="h-4 w-4 cursor-pointer"/>
          <span className="absolute -top-1 right-0 h-5 w-5 rounded-full text-white  bg-red-800 flex items-center justify-center text-xs">12</span>
        </button>

        <button className="p-2.5">
          <Settings className="h-5 w-5  cursor-pointer"/>
        </button>

          <div className="flex items-center space-x-3 border-l  border-slate-200 dark:border-slate-700 cursor-pointer"

        >
            <img src="/src/images/man.png" alt="image" className="h-8 w-8 rounded-full ring-2 ring-blue-500 ml-2 cursor-pointer"
              ref={imgRef}
              onClick={() => setOpenMenu(!openMenu)}
               />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Alex johson</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
          </div>
        </div>
        </div>
      </header>

      {
        openMenu && <div className="absolute top-18 right-4 bg-white p-4 w-52 shadow">
          <div className="bg-slate-200 flex items-center justify-center" onClick={() => setOpenMenu(false)}>
            <button className="p-2 hover:bg-slate-100 rounded-sm cursor-pointer flex items-center w-full text-red-600 font-bold" onClick={handleLogout}>
              <IoMdLogOut size={24} className="mr-2"/>
                 Logout
            </button>
            {/* <ul className="" ref={menuRef} >
              {menus.map((menu,index) => (
                <li key={index} className="p-2 hover:bg-slate-100 rounded-sm cursor-pointer flex items-center gap-4"
                  onClick={() => setOpenMenu(false)}>
                  <menu.icon size={16} />
                  {menu.name}
                </li>
              ))}
            </ul> */}
          </div>

        </div>
         }

    </>
  );
}

export default Header
