import React from "react";

const Footer = ({ transparentBackground }) => {
  return (
    <footer
      className={`fixed bottom-0 left-0 z-20 w-full p-4 border-t shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 ${
        transparentBackground
          ? "bg-transparent"
          : "bg-gray-700 dark:bg-gray-800"
      }`}>
      <span className='font-medium text-white sm:text-center dark:text-gray-400'>
        © 2023{" "}
        <a href='https://flowbite.com/' className='hover:underline'>
          Sebastian Macharette™
        </a>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-base font-medium text-white dark:text-gray-400 sm:mt-0'>
        <li>
          <a
            href='mailto:sebastian.j.macharette@gmail.com'
            className='hover:underline me-4 md:me-6'>
            Correo Electronico
          </a>
        </li>
        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/sebamacha'
            className='hover:underline me-4 md:me-6'>
            Repositorio
          </a>
        </li>
        <li>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.dropbox.com/scl/fi/8yxrtc8j1odo3u1ezm5ec/Curriculum.pdf?rlkey=mjtj5wtdbherek9ivkaorbzj8&dl=0'
            className='hover:underline me-4 md:me-6'>
            Download CV
          </a>
        </li>

        <li>
          <a href='/contact' className='hover:underline'>
            Contacto
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
