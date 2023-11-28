import "../assets/css/hero.css";
import "../assets/css/home.css";
import avatar from "../assets/img/avatar.jpg";

const Home = () => {
  return (
    <section
      id='home'
      className='bg-slate-200 sm:mt-10 mt-32  hero dark:bg-gray-900'>
      <div className='py-8 px-4  mt-16 mx-auto max-w-screen-lg text-center lg:py-16'>
        <div className=' fotos mt-10 flex flex-row justify-center gap-4'>
          <img
            className='w-6 h-6 rounded '
            src={avatar}
            alt='Extra small avatar'
          />
          <img className='w-8 h-8 rounded' src={avatar} alt='Small avatar' />
          <img className='w-10 h-10 rounded' src={avatar} alt='Medium avatar' />
          <img className='w-20 h-20 rounded' src={avatar} alt='Large avatar' />
          <img
            className='rounded w-36 h-36'
            src={avatar}
            alt='Extra large avatar'
          />
        </div>
        <h3 className='porfolio-digital animate-pulse text-white mb-1 mt-1 text-4xl font-extrabold tracking-tight text- leading-none md:text-5xl lg:text-6xl dark:text-yellow-300'>
          Portfolio Digital
        </h3>
      </div>
    </section>
  );
};
export default Home;
