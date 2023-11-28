import "../assets/css/proyect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// ...

function Atuservicio() {
  return (
    <div className='overflow-hidden'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          <iframe
            width='400'
            height='315'
            src='https://www.youtube.com/embed/rOX6NIsb-p4?si=U8NC7CXrJeZCxOVP'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div>
        <p className='mb-3 bg-purple-100 text-black me-2 px-2.5 py-0.5 text-base font-bold dark:text-white dark:bg-gray-900 round-xl rounded-xl'>
          "A tu Servicio" es una plataforma web que conecta a usuarios con una
          variedad de servicios para el hogar. Los usuarios pueden registrarse
          como clientes o proveedores, ofreciendo y buscando trabajos como
          carpintería, electricidad, entre otros. Ofrece un sistema de
          comentarios y calificaciones, además de herramientas administrativas
          para gestionar usuarios, eliminar comentarios inapropiados y moderar
          la comunicación. El objetivo principal es proporcionar una experiencia
          segura y efectiva para conectar a clientes con servicios para el
          hogar, manteniendo un entorno de interacción positiva y controlada.
        </p>

        <a
          href='https://github.com/sebamacha/A-tu-servicio.git'
          rel='noreferrer'
          target='_blank'
          className='bg-purple-100 text-black me-2 px-2.5 py-0.5 text-4xl rounded-xl hover:text-blue-700 dark:hover:text-black dark:text-yellow-300 dark:bg-gray-900'
          style={{ width: "max-content" }}>
          <FontAwesomeIcon icon={faGithub} className='mr-2' />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Atuservicio;
