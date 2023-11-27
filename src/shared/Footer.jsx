import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <a href='/' className='hover:underline'>
          Sebastian Macharette™
        </a>
        . Todos los derechos reservados.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-base font-medium text-white dark:text-gray-400 sm:mt-0'>
        <li>
          <a
            href='mailto:sebastian.j.macharette@gmail.com'
            className='hover:underline me-4 md:me-6'>
            Correo Electrónico
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
            href='https://www.dropbox.com/scl/fi/8yxrtc8jdo3u1odo3ec/Curriculum.pdf?key=m234567890'
            className='hover:underline me-4 md:me-6'>
            Descargar CV
          </a>
        </li>

        {/* Otros elementos del footer */}
      </ul>
    </footer>
  );
};

export default Footer;
