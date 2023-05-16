import React from "react";
// Import Sun and Moon Icon for Toggle Switch
import { MdNightsStay, MdWbSunny } from "react-icons/md";

// Put the dark mode parameter with object destructuring
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white text-gray-900 dark:bg-gray-900 dark:text-white ">
      <nav className="flex items-center justify-between p-5">
        <h1 className="text-lg">IZIE</h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {/* If-else for dark mode toggle switch */}
          {darkMode ? (
            <MdWbSunny className="cursor-pointer text-2xl" />
          ) : (
            <MdNightsStay className="cursor-pointer text-2xl" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
