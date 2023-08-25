import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';




const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/teachers.png",
          link: "https://teachers1on1.com/",
          detalles: "rojo"
        },
        {
          title: "title",
          path: "/teachers2.png",
          link: "https://teachers1on1.com/about-us",
        },
        {
          title: "title",
          path: "/teachers3.png",
          link: "https://teachers1on1.com/explore",
        },
        {
          title: "title",
          path: "/teachers4.png",
          link: "https://teachers1on1.com/teacher/cassandra-j",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/psychic.png",
          link: "https://psychics1on1.com/",
        },
        {
          title: "title",
          path: "/psychic1.png",
          link: "https://psychics1on1.com/horoscope",
        },
        {
          title: "title",
          path: "/psychic2.png",
          link: "https://psychics1on1.com/about",
        },
        {
          title: "title",
          path: "/psychic4.png",
          link: "https://psychics1on1.com/press",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/admin.png",
          link: "https://github.com/roberth1927/dashboard-adminpro",
        },
        {
          title: "title",
          path: "/admin1.png",
          link: "https://github.com/roberth1927/dashboard-adminpro",
        },
        {
          title: "title",
          path: "/admin2.png",
          link: "https://github.com/roberth1927/dashboard-adminpro",
        },
        {
          title: "title",
          path: "/admin3.png",
          link: "https://github.com/roberth1927/dashboard-adminpro",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[600px] xl:mt-14"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden flex items-center justify-center group"
              >
              
                  <motion.div
                    className="card-container"
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 180 }}
                  >
                 
                    <div className="card-front flex items-center justify-center overflow-hidden group">
                      <Image src={image.path} width={400} height={250} alt="" />
                    </div>

              
                    <div className="card-back p-[1px] rounded-[20px] shadow-card">
                      <div className="card-back-content bg-tertiary"> 
                          
                              <h3 className='text-white text-[20px] font-bold text-center'>
                                En construccion
                              </h3>      

                      </div>
                    </div>
                  </motion.div>
               
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
