import React, { useState } from "react";
import img1 from "../assets/img/certificados/1.webp";
import img2 from "../assets/img/certificados/2.webp";
import img3 from "../assets/img/certificados/3.webp";
import img4 from "../assets/img/certificados/4.webp";
import img5 from "../assets/img/certificados/5.webp";
import img6 from "../assets/img/certificados/6.webp";
import img7 from "../assets/img/certificados/7.webp";
import img8 from "../assets/img/certificados/8.webp";
import img9 from "../assets/img/certificados/9.webp";
import img10 from "../assets/img/certificados/10.webp";
import img11 from "../assets/img/certificados/11.webp";
import img12 from "../assets/img/certificados/12.webp";
import img13 from "../assets/img/certificados/13.webp";
import img14 from "../assets/img/certificados/14.webp";
import img15 from "../assets/img/certificados/15.webp";
import img16 from "../assets/img/certificados/16.webp";
import img17 from "../assets/img/certificados/17.webp";
import img18 from "../assets/img/certificados/18.webp";
import "../assets/css/certificate.css";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (event) => {
    const selectedImageSrc = event.target.src;
    setSelectedImage(selectedImageSrc);
  };
  return (
    <div className='certificates dark:text-white dark:bg-gray-900'>
      {selectedImage && (
        <div className=' modal dark:text-white dark:bg-gray-900'>
          <img src={selectedImage} alt='' style={{ width: "100%" }} />
          <button
            className='absolute mt-5 mr-5 top-0 right-0 border-gray-400 text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full text-2xl font-bold px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-pulse'
            onClick={() => {
              const scrollPosition = window.scrollY;
              setSelectedImage(null);
              window.scrollTo({
                top: scrollPosition,
                behavior: "smooth",
              });
            }}
            style={{ opacity: 0.8 }}>
            Cerrar
          </button>
        </div>
      )}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img1}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img2}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img3}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img4}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img5}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img6}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img7}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img8}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img9}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img10}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img11}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img12}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img13}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img14}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img15}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img16}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img17}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={img18}
            alt=''
            onClick={handleImageClick}
          />
        </div>
        {/* Other images with onClick event */}
      </div>
    </div>
  );
};

export default Certificate;
