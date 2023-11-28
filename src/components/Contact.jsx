import "../assets/css/contact.css";

import img1 from "../assets/img/contacto/1.webp";
import img2 from "../assets/img/contacto/2.webp";
import img3 from "../assets/img/contacto/3.webp";
import img4 from "../assets/img/contacto/4.webp";
import img5 from "../assets/img/contacto/5.webp";
import img6 from "../assets/img/contacto/6.webp";
import img7 from "../assets/img/contacto/7.webp";
import img8 from "../assets/img/contacto/8.webp";
import img9 from "../assets/img/contacto/9.webp";
import img10 from "../assets/img/contacto/10.webp";

const Contact = () => {
  return (
    <div id='contact' className='tapiz dark:bg-slate-800 pt-4 dark:text-white'>
      <div className='text-center m-4 p-4 text-4xl font-bold'>
        <h1>Por estos medios puedes contactarme y ver parte de mis trabajos</h1>
      </div>

      <div className='container mx-auto'>
        <div className='flex  justify-center flex-wrap p-4'>
          <a
            href='https://wa.me/+543464573869'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img1} alt='' />
          </a>
          <a
            href='https://www.twitter.com/SMacharette'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img2} alt='' />
          </a>
          <a
            href='https://www.instagram.com/sebastianmacharette1984'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-24 w-24' src={img3} alt='' />
          </a>
          <a
            href='tel:+543464573869'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img4} alt='' />
          </a>
          <a
            href='https://t.me/sebamacha'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img5} alt='' />
          </a>
          <a
            href='https://discord.com/channels/sebastianmacharette'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img6} alt='' />
          </a>
          <a
            href='mailto:sebastian.j.macharette@gmail.com'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img7} alt='' />
          </a>
          <a
            href='https://github.com/sebamacha'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-20 w-20' src={img8} alt='' />
          </a>
          <a
            href='https://www.dropbox.com/scl/fi/8yxrtc8j1odo3u1ezm5ec/Curriculum.pdf?rlkey=mjtj5wtdbherek9ivkaorbzj8&dl=0'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img
              className='animate-pulse h-20 w-20 transform '
              src={img9}
              alt=''
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCwlwkkfb6yNHPY44TZOXiag'
            rel='noreferrer'
            target='_blank'
            className='m-2'>
            <img className='animate-pulse h-24 w-24 ' src={img10} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
