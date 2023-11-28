import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

import "../assets/css/navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    const toggleButton = document.querySelector(".navbar-toggle");
    const checkbox = document.querySelector('input[type="checkbox"]');

    toggleButton.addEventListener("click", () => {
      checkbox.checked = !checkbox.checked;
    });
  };
  return (
    <nav className='flex nav-position text-white flex-wrap justify-between items-center p-4  bg-transparent border-gray-200 dark:text-white dark:bg-gray-900'>
      <div className='flex items-center space-x-4'></div>
      <ul className='flex flex-wrap justify-center text-xl font-medium items-center space-x-4 mt-4 md:mt-0'>
        <li className='botones'>
          <a
            href='#home'
            aria-current='page'
            className='bg-blue-700 text-black me-2 px-2.5 py-0.5 rounded-xl  py-0  font-bold rounded-xl shadow-xl hover:text-gray-600 hover:bg-gray-50 dark:text-yellow-300 dark:hover:bg-gray-800 dark:hover:text-yellow-300 md:hover:mt-2 dark:bg-gray-900'>
            Home
          </a>
        </li>
        <li className='botones'>
          <a
            href='#about'
            aria-current='page'
            className='bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl  py-0 text-blue-500 font-bold rounded-xl shadow-xl hover:text-gray-600 hover:bg-gray-50 dark:text-yellow-300 dark:hover:bg-gray-800 dark:hover:text-yellow-300 md:hover:mt-2 dark:bg-gray-900'>
            Acerca de mi
          </a>
        </li>

        {/* Agrega los demás enlaces aquí */}
        <li className='botones  '>
          <a
            href='#skills'
            aria-current='page'
            className='bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl  text-orange-400 py-0 font-bold rounded-xl shadow-xl hover:text-gray-600 hover:bg-gray-50 dark:text-yellow-300 dark:hover:bg-gray-800 dark:hover:text-yellow-300 md:hover:mt-2 dark:bg-gray-900'>
            Skills
          </a>
        </li>
        <li className='botones'>
          <a
            href='#certificate'
            aria-current='page'
            className='bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl  text-blue-500 py-0 font-bold rounded-xl shadow-xl hover:text-gray-600 hover:bg-gray-50 dark:text-yellow-300 dark:hover:bg-gray-800 dark:hover:text-yellow-300 md:hover:mt-2 dark:bg-gray-900'>
            Certificados
          </a>
        </li>

        <li className='botones'>
          <a
            href='#proyect'
            aria-current='page'
            className='bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl  text-blue-500 py-0 font-bold rounded-xl shadow-xl hover:text-gray-600 hover:bg-gray-50 dark:text-yellow-300 dark:hover:bg-gray-800 dark:hover:text-yellow-300 md:hover:mt-2 dark:bg-gray-900'>
            Proyectos
          </a>
        </li>
        <li>
          <label className=' bg-blue-700   rounded-xl shadow-xl  relative inline-flex items-center cursor-pointer dark:bg-gray-900'>
            <input
              type='checkbox'
              onChange={handleChangeTheme}
              checked={theme === "dark"}
              className='sr-only peer p-2 dark:bg-gray-900'
            />
            <div className="w-11  text-purple-800  rounded-xl  h-6 m-0 peer-focus:outline-none peer-focus:ring-4   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:bg-gray-900"></div>
            <span className='  text-white  rounded-xl px-4 dark:text-yellow-300 text-xl font-medium  dark:text-gray-300 '>
              Theme
            </span>
            <div className='ms-1  text-purple-800  rounded-xl px-4 font-medium text-white text-yellow-400 dark:bg-gray-900'>
              {theme === "dark" ? (
                <Moon className='w-5 h-5 inline-block  ' />
              ) : (
                <Sun className='w-5 h-5 inline-block  ' />
              )}
            </div>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
