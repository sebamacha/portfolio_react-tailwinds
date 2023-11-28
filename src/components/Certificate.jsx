import { useState, useRef, useEffect } from "react";
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
  const [originalScrollPosition, setOriginalScrollPosition] = useState(0);
  const imageRef = useRef(null);

  const handleImageClick = (event) => {
    const selectedImageSrc = event.target.src;
    setSelectedImage(selectedImageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
    window.scrollTo({
      top: originalScrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (selectedImage) {
      setOriginalScrollPosition(window.scrollY);
      imageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedImage]);

  return (
    <div
      id='certificate'
      className='certificates dark:text-white dark:bg-gray-900'>
      {selectedImage && (
        <div className='modal dark:text-white dark:bg-gray-900'>
          <div ref={imageRef} style={{ position: "relative" }}>
            <img
              src={selectedImage}
              alt=''
              style={{
                width: "60%",
                margin: "0 auto",
                display: "block",
                zIndex: 605,
              }}
            />
            <button
              className='text-white text-3xl bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 absolute top-0 right-0'
              onClick={closeModal}
              style={{ opacity: 0.8 }}>
              Cerrar
            </button>
          </div>
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
      </div>
    </div>
  );
};

export default Certificate;
