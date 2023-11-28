import "../assets/css/about.css";
import avat from "../assets/img/avatar.jpg";

const about = () => {
  return (
    <div
      id='about'
      className='min-h-screen about px-1.5 py-1.5 md:py-0.5 sm:text-center bg-neutral-200 dark:bg-gray-900'>
      <div className='flex flex-col about-margin mb-6 md:flex-row items-center gap-4 md:text-center'>
        <img
          className='w-44 h-44 rounded-full ml-6 mb-4 md:mb-0 md:ml-0 md:mr-4'
          src={avat}
          alt=''
        />
        <div className='font-medium dark:text-white md:text-center text-left'>
          <div className='text-3xl mt-4'>Sebastian Macharette</div>
          <div className='text-4xl mt-0 text-sky-500 dark:text-gray-400 animate-pulse'>
            Full Stack Developer
          </div>
          <div className='mx-4 mt-4 sm:text-center lg:flex lg:justify-end'>
            <p className='text-2xl'>
              Soy Sebastián Joaquín Macharette, un apasionado de la programación
              y el diseño.
              <br />
              Mi pasión por la programación nació a una edad temprana, cuando
              tuve mi primera computadora con Windows 3.1 a los 11 años. Desde
              entonces, he seguido aprendiendo y explorando nuevas tecnologías y
              lenguajes de programación.
              {/* Resto del texto */}
            </p>
          </div>
          <p className='text-gray-500 text-lg italic mt-6 pr-4 m-10 text-right'>
            Los buenos programadores saben qué escribir. Los grandes
            programadores saben qué volver a escribir (y reutilizar).
          </p>

          <h5 className=' text-gray-500  text-lg  italic m-10 pr-4 text-right animate-pulse'>
            - Eric S. Raymond
          </h5>
          <br />
        </div>
        <br />
      </div>
    </div>
  );
};

export default about;
