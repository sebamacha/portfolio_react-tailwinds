import React from "react";
import atuservicio from "../assets/img/proyect/atuservicio.webp";
import "../assets/css/proyect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// ...

function Atuservicio() {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img className='rounded-t-lg' src={atuservicio} alt='' />
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            A tu servicio
          </h5>
        </a>
        <p className='mb-3 text-base font-bold text-black dark:text-gray-400'>
          Proyecto realizado con Spring-Boot, Spring-Security, Thymeleaf,
          Boostrap, MySql
        </p>

        <button
          data-modal-target='default-modal'
          data-modal-toggle='default-modal'
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'>
          Video y mas...
        </button>

        <div
          id='default-modal'
          tabIndex='-1'
          aria-hidden='true'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
          <div className='relative p-4 w-full max-w-2xl max-h-full'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-3xl text-center font-mono font-semibold text-blue-700 dark:text-white'>
                  A tu servicio
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide='default-modal'>
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'>
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>

              <div className='p-1 md:p-5 space-y-4'>
                <div className='p-1 md:p-5 space-y-4 relative'>
                  <div
                    className='overflow-hidden relative rounded-lg'
                    style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className='absolute inset-0 w-full h-full video-proyectos'
                      src='https://www.youtube.com/embed/rOX6NIsb-p4?si=PO2TQU2DpExpA9Hw'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen></iframe>
                  </div>
                </div>

                <p className='text-base font-bold leading-relaxed text-gray-500 dark:text-gray-400'>
                  Proyecto creado de manera grupal, donde los usuarios se pueden
                  registrar como clientes, proveedores para buscar/ofrecer
                  servicios como plomeria,carpitenria, albañil, pintor para su
                  hogar , creado con spring security, thimeleaf, boostrap y db
                  Mysql(en cambio el frontend de thimeleaf a react vite)
                </p>
              </div>

              <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b'>
                <div className='flex justify-center'>
                  <a
                    href='https://github.com/sebamacha/A-tu-servicio.git'
                    rel='noreferrer'
                    target='_blank'>
                    <FontAwesomeIcon
                      className='h-20 w-20 text-center ml-3 dark:text-white animate-pulse'
                      icon={faGithub}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atuservicio;
