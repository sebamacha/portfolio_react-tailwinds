import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`fixed bg-transparent bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-between md:p-6 ${
        theme === "light" ? "bg-transparent" : "bg-gray-800"
      }`}>
      <span className=' font-bold text-xl text-black sm:text-center dark:text-yellow-300 dark:bg-gray-900 rounded-xl bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl '>
        © 2023{" "}
        <a
          href='/'
          className='hover:underline dark:text-yellow-300 dark:bg-gray-900'>
          Sebastian Macharette™
        </a>
        . Todos los derechos reservados.
      </span>
      <ul className='flex flex-wrap text-xl items-center mt-3 text-base font-medium  dark:text-yellow-300 dark:bg-gray-900 rounded-xl sm:mt-0'>
        <li>
          <a
            href='#contact'
            className='hover:underline me-4 md:me-6 dark:text-yellow-300 dark:bg-gray-900 rounded-xl bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl '>
            Contacto
          </a>
        </li>
        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/sebamacha'
            className='hover:underline me-4 md:me-6 dark:text-yellow-300 dark:bg-gray-900 rounded-xl bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl '>
            Repositorio
          </a>
        </li>
        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.dropbox.com/scl/fi/8yxrtc8jdo3u1odo3ec/Curriculum.pdf?key=m234567890'
            className='hover:underline me-4 md:me-6 dark:text-yellow-300 dark:bg-gray-900 rounded-xl bg-blue-700 text-white me-2 px-2.5 py-0.5 rounded-xl '>
            Descargar CV
          </a>
        </li>
        {/* Otros elementos del footer */}
      </ul>
    </footer>
  );
};

export default Footer;
