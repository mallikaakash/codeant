import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { ChevronDown } from 'lucide-react';

const peopleList = [
  "Ashokan Suresh Dhinagaran ",
  "Abhishek Choudhary",
  "E SaiSurya",
  "Aakash Debraj Mallik",
];

const HamburgerMenu = ({ sideBarItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="relative">
      <div className=" flex items-center z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-gray-800 transition-all duration-200"
        >
          {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 
        transition-all duration-200 transform origin-top 
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="w-full flex items-center justify-between p-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <span className="truncate text-gray-700">{peopleList[0]}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  isOpenMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpenMenu && (
              <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100">
                {peopleList.map((person, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 truncate"
                  >
                    {person}
                  </a>
                ))}
              </div>
            )}


        {/* Menu Items */}
        <div className="px-4 py-2">
          {sideBarItems.map((item, index) => (
            <div key={index} 
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Support and Logout */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
            <span>Support</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-gray-100 rounded-md cursor-pointer">
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;