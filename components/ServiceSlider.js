import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx'


import { FreeMode, Pagination } from 'swiper';
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Backend',
    description: 'Desarrollo sistemas y aplicaciones desde el núcleo, creando lógica de servidor eficiente.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Frontend',
    description: 'Creo interfaces interactivas que brindan una experiencia fluida a los usuarios.',
  },
  {
    icon: <RxDesktop />,
    title: 'Diseño',
    description: 'Mi enfoque en el diseño se basa en la combinación de estética y funcionalidad ',
  },
 
  
];

const ServiceSlider = () => {
  return (

     <Swiper 
      breakpoints={{
        320: {
          slidesPerView:1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView:3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable:true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
     >

     {
        serviceData.map((item, index) => (
          
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
                            hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300'>

              <div className='text-4xl text-naranja mb-4'>{item.icon}</div>

              <div className='mb-8'>
                 <div className='mb-2 text-lg'>{item.title}</div>
                 <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>

              <div className='text-3xl'>

                <RxArrowTopRight className='group-hover:rotate-45 group-hover:green-pink-gradient transition-all duration-300'/>

              </div>
            </div>
          </SwiperSlide>
        ))
      }
     </Swiper>
  );
};

export default ServiceSlider;



















