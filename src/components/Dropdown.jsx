import { useState } from 'react';
import down from '/assets/down.svg';
const DropdownWithArrow = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an Option');
  const options = ['UtkarshDhairyaPanwar', 'Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block w-[88vw] xl:w-[200px] ">
      <div
        className="flex items-center justify-between px-4 py-2 border rounded-lg cursor-pointer bg-white shadow-sm"
        onClick={toggleDropdown}
      >
        <span className="truncate text-[16px] xl:text-sm">{selectedOption}</span>
        <img src={down} alt="Dropdown Arrow" className="w-4 h-6" />
      </div>

      {isDropdownOpen && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 max-h-[200px] overflow-auto text-[16px] xl:text-sm">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownWithArrow;
