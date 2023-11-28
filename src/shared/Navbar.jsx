import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import navbar from "../assets/img/nabvar.webp";
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
    <nav className='flex nav-position text-black flex-wrap justify-between items-center p-4  bg-blue-500 border-gray-200 dark:text-white dark:bg-gray-900'>
      <div className='flex items-center space-x-4'>
        <img className='h-10 w-auto ' src={navbar} alt='Logo' />
        <span className=' text-2xl font-medium text-gray-800 dark:text-white'>
          Full Stack Developer
        </span>
      </div>
      <ul className='flex flex-wrap justify-center text-xl font-medium items-center space-x-4 mt-4 md:mt-0'>
        <li className='botones'>
          <a
            href='#home'
            aria-current='page'
            className='px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 md:hover:mt-2'>
            Home
          </a>
        </li>
        <li className='botones'>
          <a
            href='#about'
            aria-current='page'
            className='px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 md:hover:mt-2'>
            Acerca de mi
          </a>
        </li>

        {/* Agrega los demás enlaces aquí */}
        <li className='botones'>
          <a
            href='#skills'
            aria-current='page'
            className='px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 md:hover:mt-2'>
            Skills
          </a>
        </li>
        <li className='botones'>
          <a
            href='#certificate'
            aria-current='page'
            className='px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 md:hover:mt-2'>
            Certificados
          </a>
        </li>

        <li className='botones'>
          <a
            href='#'
            aria-current='page'
            className='px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 md:hover:mt-2'>
            Proyectos
          </a>
        </li>
        <li>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              onChange={handleChangeTheme}
              checked={theme === "dark"}
              className='sr-only peer'
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className='ms-3 text-xl font-medium text-gray-900 dark:text-gray-300'>
              Theme
            </span>
            <div className='ms-3  font-medium text-gray-900 dark:text-gray-300'>
              {theme === "dark" ? (
                <Moon className='w-5 h-5 inline-block mr-2' />
              ) : (
                <Sun className='w-5 h-5 inline-block mr-2 ' />
              )}
            </div>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
