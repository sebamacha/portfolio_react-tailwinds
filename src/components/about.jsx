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
        <div className='w-max font-medium dark:text-white md:text-center text-left'>
          <div
            className='inline-block text-gray-500 bg-purple-100 text-purple-800 me-2 px-2.5 py-0.5 rounded-xl text-3xl mt-4 dark:text-white dark:bg-gray-900'
            style={{ width: "max-content" }}>
            Sebastian Macharette
          </div>
          <br />
          <div
            className='inline-block text-gray-500 bg-purple-100 text-purple-800 me-2 px-2.5 py-0.5 rounded-xl text-3xl mt-4 dark:text-white dark:bg-gray-900'
            style={{ width: "max-content" }}>
            Full Stack Developer
          </div>
          <div className='bg-purple-100 text-black me-2 px-2.5 py-0.5 rounded-xl mt-4 sm:text-center lg:flex lg:justify-end dark:text-white dark:bg-gray-900'>
            <p className='text-2xl '>
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
          <p className='text-gray-500 bg-purple-100 text-purple-800 me-2 px-2.5 py-0.5 rounded-xl text-lg italic mt-6 pr-4 m-10 text-right dark:text-white dark:bg-gray-900'>
            Los buenos programadores saben qué escribir. Los grandes
            programadores saben qué volver a escribir (y reutilizar).
          </p>

          <h5 className='bg-purple-100 text-purple-800 me-2 px-2.5 py-0.5 rounded-xl text-gray-500 w-32  text-lg  italic m-10 pr-4 text-right animate-pulse dark:text-white dark:bg-gray-900'>
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
