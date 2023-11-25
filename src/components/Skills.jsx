import React from "react";
import "../assets/css/skills.css";
import java from "../assets/img/logos/java.png";
import node from "../assets/img/logos/node.png";
import react from "../assets/img/logos/react.png";
import tailwind from "../assets/img/logos/tailwind.png";
import thymeleaf from "../assets/img/logos/thymeleaf.png";
import flowbite from "../assets/img/logos/flowbite.png";
import magic from "../assets/img/logos/magic.png";
import html from "../assets/img/logos/html.png";
import spring from "../assets/img/logos/pring.png";
import css from "../assets/img/logos/html.png";
import js from "../assets/img/logos/js.png";
import mysql from "../assets/img/logos/mysql.png";

const Skills = () => {
  return (
    <div className='skillss dark:bg-gray-900'>
      <p className='p-4 text-black text-lg font-bold dark:text-white dark:bg-gray-900'>
        "Soy un desarrollador Full Stack con experiencia en Java y Python,
        estudiante de diseño UX/UI. Mi trayectoria incluye sólidos conocimientos
        en desarrollo de aplicaciones, manejo de bases de datos y diseño de
        interfaces intuitivas. Apasionado por crear experiencias digitales
        impactantes y funcionales."
      </p>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='m-4 text-black dark:text-white dark:bg-gray-900'>
          <div className='flex justify-center'>
            <h3 className='text-4xl italic m-2 font-bold text-black dark:text-white'>
              Frontend
            </h3>
          </div>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
            HTML
          </span>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
            CSS
          </span>
          <span className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
            JavaScript
          </span>
          <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
            Bootstrap
          </span>
          <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
            Tailwind
          </span>
          <span className='bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'>
            React Vite
          </span>
          <span className='bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>
            Thymeleaf
          </span>
          <br />
          <span className='bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300'>
            Flowbite
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
            React Magic Motion
          </span>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
            WordPress
          </span>
          <span className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
            Elementor
          </span>
          <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
            Ant Design
          </span>
          <br />
          <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
            Semantic-UI
          </span>
          <span className='bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'>
            BULMA
          </span>
          <span className='bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>
            HyperUI
          </span>
          <span className='bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300'>
            Figma
          </span>
          <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
            Canva
          </span>
        </div>
        <div className='m-4 text-black dark:text-white dark:bg-gray-900'>
          <div className='flex justify-center'>
            <h3 className='text-4xl  italic m-2 font-bold text-black dark:text-white'>
              Backend
            </h3>
          </div>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
            Java
          </span>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
            Python
          </span>
          <span className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
            Spring Boot
          </span>
          <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
            Spring Security
          </span>
          <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
            Hibernate
          </span>
          <span className='bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'>
            Maven
          </span>
          <span className='bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>
            Java-Swing
          </span>
          <br />
          <span className='bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300'>
            Java-fx
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
            Mysql
          </span>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
            Git
          </span>
        </div>
      </div>
      <p className='p-4 text-black text-lg font-bold dark:text-white dark:bg-gray-900'>
        Destaco por mi habilidad para colaborar en equipo, comunicar ideas de
        manera efectiva y resolver problemas de forma creativa. Además, poseo
        una gran adaptabilidad, capacidad de liderazgo y un enfoque proactivo en
        la resolución de desafíos.
      </p>
      <div className='mb-3.5 mx-1 flex flex-wrap justify-center'>
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={html}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={spring}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-spin'
          src={java}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={node}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={css}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={js}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-spin'
          src={react}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={tailwind}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={flowbite}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={thymeleaf}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-spin'
          src={magic}
          alt=''
        />
        <img
          className='rounded-lg w-20 h-20 m-4 animate-pulse'
          src={mysql}
          alt=''
        />
      </div>
    </div>
  );
};

export default Skills;
