import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/teachers.png",
          link: "https://teachers1on1.com/",
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
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <a href={image.link} target="_blank">
                  <div className="flex items-center justify-center relative  overflow-hidden group">
                    <Image src={image.path} width={400} height={250} alt="" />

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-1 group-hover:xl:-translate-y-28 transition-all duration-300 ">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-naranja">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECTS
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0  transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
