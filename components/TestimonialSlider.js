import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Autoplay, Parallax } from 'swiper';



import Image from "next/image";
import { FaQuoteLeft } from 'react-icons/fa'



// testimonial data
const testimonialData = [
  {
    image: '/telx.jpg',
    name: 'Telx Computers',
    position: '2022 - 2023',
    message:
      'Desarrollar módulos innovadores para clases virtuales y campañas de marketing por correo electrónico, contribuyendo directamente a la expansión de la presencia en línea, Me enfoqué en la identificación y resolución de errores existentes, mejorando la calidad y confiabilidad del software, colaboré en la optimización de módulos existentes utilizados para citas en línea, brindando a los usuarios una experiencia más fluida, tambien desarrolle módulos de contabilidad para el pago a clientes y trabajadores, asegurando un proceso financiero eficiente y transparente.',
  },
  {
    image: '/corvus1.png',
    name: 'Corvus Lab S.A.S',
    position: '2021 - 2022',
    message:
      'Durante mi tiempo en Corvus Lab S.A.S, tuve la oportunidad de trabajar en diversos proyectos clave. Contribuí al desarrollo y optimización del módulo de nómina, participando en la implementación de soluciones para resoluciones de facturación electrónica y nómina electrónica. También colaboré en la creación de módulos de contabilidad y recursos humanos.',
  },
  {
    image: '/motoreste.jpg',
    name: 'Motoreste  S.A.',
    position: '2018 - 2020',
    message:
      'Desarrollo de un sistema integral para la gestión de vehículos en reparación. Este sistema permitía el ingreso eficiente de automóviles, capturando información detallada y fotos para evaluar su estado. Este sistema también gestionaba la asignación de mecánicos y la disponibilidad del taller, optimizando los tiempos de reparación. Además, se registraban los tiempos de entrada y posibles tiempos de entrega, mejorando la planificación y la comunicación con los clientes.',
  },
];

const  TestimonialSlider = () => {
  return (

     <Swiper 
      navigation={true}
      pagination={{
        clickable:true,
      }}
      modules={[Navigation, Pagination, Autoplay, Parallax]}
      className='h-[400px]'
      autoplay={{ delay: 6000 }}
      speed={2000}
      loop={true}
      parallax={true}
     >

     {
        testimonialData.map((person, index) => (
          
          <SwiperSlide key={index}>

              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center realtive mx-auto xl:mx-0'>
                   <div className='flex flex-col justify-center text-center'>

                       <div className='pl-6 '>
                         <Image src={person.image} width={100} height={100} alt='' />                          
                       </div>

                       <div className='text-lg'>{person.name}</div>
                       <div className='text-[12px] uppercase front-extralight tracking-widest'>{person.position}</div>
                   </div>
                </div>

                <div className='flex-1 flex flex-col justify-center 
                                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
                                xl:before:h-[200px] relative xl:pl-20 ' data-swiper-parallax='scroll:-100%'>

                  <div className='mb-4'>
                    <FaQuoteLeft  className='text-4xl xl:text-4xl text-white/20 mx-auto md:mx-0'/></div>

                  <div className='xl:text-lg text-center md:text-left'>
                    {person.message}
                  </div>

                </div>
                
              </div>

              

          </SwiperSlide>
          
        ))}
     </Swiper>
  );
};

export default TestimonialSlider;
