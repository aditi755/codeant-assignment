
// Sidebar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { motion } from 'framer-motion';
import DropdownWithArrow from './Dropdown';
import menuItems  from '../data/menuItems';
import logo from '/assets/logo.svg';
import hamburger from '/assets/hamburger.svg';
import close from '/assets/close.svg';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className="xl:h-screen xl:w-[242px] md:w-[100vw]  border-2 border-gray-200 bg-white">
      <div className='xl:ml-3'>
      {/* Header Section */}
      <div className="flex justify-between p-4 mt-3 xl:flex-row flex-row">
        {/* Logo */}
        <div className="flex gap-2">
          <img src={logo} alt="logo" className="w-[28.5px] h-[32px]" />
          <p className="text-2xl xl:text-[20px] font-satoshi">CodeAnt AI</p>
        </div>

        {/* Hamburger Icon (Visible only on mobile/tablet) */}
        <div className="xl:hidden">
          {
            isSidebarOpen ? (<img
              src={close}
              alt="close"
              className="w-[24.5px] h-[20px] cursor-pointer"
              onClick={toggleSidebar}
            />) : (<img
              src={hamburger}
              alt="hamburger"
              className="w-[24.5px] h-[20px] cursor-pointer"
              onClick={toggleSidebar}
            />)
          }
        </div>
      </div>

      {/* Search Input for desktop */}
      <div className="xl:block hidden">
      <DropdownWithArrow />
      </div>

      {/* Sidebar Menu (Responsive and Animated) */}
      <motion.div
        className={`p-4 xl:text-[20px] xl:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        initial={{ x: '-100%' }}
        animate={isSidebarOpen ? { x: 0 } : { x: '-100%' }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
      <DropdownWithArrow />
        <ul className="mt-7 space-y-3 text-[15px] font-semibold">
          {menuItems.map((item, index) => (
              <li key={index} className="flex items-center space-x-3 ">
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6"
              />
              <Link to={item.path} className="">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

 {/* Sidebar Menu (Visible only on desktop) */}
<div className="xl:block hidden h-[70vh]">
  <ul className="space-y-0 mt-6 flex flex-col h-full text-[14px] font-semibold"> {/* Add flex and full height */}
    {menuItems.slice(0, 5).map((item, index) => (  // Show first 5 items at the top
      <li key={index} className="flex items-center space-x-3 hover:bg-blue-500 w-[200px] hover:text-white h-[40px] rounded-md">
        <div className="flex justify-center items-center gap-3">
        <img
          src={item.icon}
          alt={item.name}
          className="w-6 h-6 hover:fill-white ml-3"
        />
        <Link to={item.path} className="">
          {item.name}
        </Link>
        </div>
       
      </li>
    ))}
   
  </ul>

  <div className="-mt-5"> {/* This div ensures the last items are pushed to the bottom */}
  {menuItems.slice(5).map((item, index) => (  // Show last two items at the bottom
  <li key={index} className="flex items-center space-x-3 w-[200px] h-[40px] rounded-md hover:bg-blue-600 hover:text-white font-semibold text-[14px]">
    <div className="flex items-center space-x-3 w-full h-full">
      <img
        src={item.icon}
        alt={item.name}
        className="w-6 h-6 ml-3 hover:fill-white"
      />
      <Link to={item.path} className="hover:text-white">
        {item.name}
      </Link>
    </div>
  </li>
))}
    </div>
</div>

      </div>
    </aside>
  );
};

export default Sidebar;
