import { useState } from "react";
import { FaHome, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";






function Sidebar({ isOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome size={21} />,
      link: "/dashboard",
    },
    {
      title: "User",
      icon: <RiAdminFill size={21} />,
      link: "/users",
    },
    {
      title: "Employee",
      icon: <AiFillProduct size={22} />,
      submenu: [
        { title: "Add Employee", link: "/addemployee" },
        { title: "Employee List", link: "/employeelist" },
      ],
    },
    {
      title: "With Drawal",
      icon: <FaShoppingCart size={20} />,
      submenu: [
        { title: "Form", link: "/form" },
        { title: "Withdrawal Employee", link: "/withdrawal" },
      ],
    },
  ];

  return (
    <>
      <aside className={`bg-white w-64 space-y-6 py-4 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}>

        <div className='flex items-center gap-2.5 font-medium border-b border-slate-400 py-1 mx-2'>
          <img src="../images/company.png" alt="image" className="w-[55px] rounded-full" />
          <span className='text-xl whitespace-pre font-semibold'>AMERCO</span>
        </div>
        <nav>
          <div className="mx-3">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <>
                      <button onClick={() => toggleSubmenu(index)}
                        className="flex items-center justify-between w-full px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">
                        <span className="flex items-center gap-2 text-[15px]">
                          {item.icon} {item.title}
                        </span>
                        {openSubmenu === index ? <FaChevronDown size={14} className="text-slate-500" /> : (
                          <FaChevronRight size={14} className="text-slate-500" />
                        )}
                      </button>
                      {openSubmenu === index && (
                        <ul className="ml-6 mt-1 space-y-1 text-sm">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                              <a
                                href={subItem.link}
                                className="block px-2 py-1 hover:bg-gray-100 rounded"
                              >
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.link}
                      className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded"
                    >
                      {item.icon} {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </nav>
      </aside>
    </>

  );
}


export default Sidebar
