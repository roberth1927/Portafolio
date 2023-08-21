import React, { useState} from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaNode
} from 'react-icons/fa';

import CountUp from 'react-countup';
import {
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiNestjs,
  SiNextdotjs
} from 'react-icons/si';

const aboutData = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Frontend',
        icons: [
          { icon: <FaHtml5 />, key: 'html5' },
          { icon: <FaCss3 />, key: 'css3' },
          { icon: <FaJs />, key: 'js' },
          { icon: <FaAngular />, key: 'angular' },
          { icon: <FaVuejs />, key: 'vuejs' },
          { icon: <FaReact />, key: 'react' },
          { icon: <SiNextdotjs />, key: 'nextjs' },
          
        ],
      },
      {
        title: 'Backend',
        icons: [
          { icon: <FaJs />, key: 'backend-js' },
          { icon: <FaPhp />, key: 'php' },
          { icon: <FaNode />, key: 'node' },
          { icon: <SiNestjs />, key: 'nestjs' },
          { icon: <FaLaravel />, key: 'laravel' },
       
        ],
      },
      {
        title: 'Otras Tecnologías',
        icons: [
          { icon: <SiMongodb />, key: 'mongodb' },
          { icon: <SiMysql />, key: 'mysql' },
          { icon: <SiDocker />, key: 'docker' },
          { icon: <SiGit />, key: 'git' },
          { icon: <SiGithub />, key: 'github' },
      ],
      },
    ],
  },
 /*  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  }, */
  {
    title: 'experiencia',
    info: [
      {
        title: 'Telx Computers',
        stage: '2022 - 2023',
      },
      {
        title: 'Corvus Lab S.A.S',
        stage: '2021 - 2022',
      },
      {
        title: 'Motoreste Motors S.A.',
        stage: '2018 - 2020',
      },
    ],
  },
  {
    title: 'Formación',
    info: [
      {
        title: 'TECNÓLOGO EN ANALISIS Y DESARROLLO DE SISTEMAS DE INFORMACION',
        stage: '2019',
      },
    ],
  },
];


import Avatar from '../../components/Avatar.js';
import Circles from '../../components/Circles.js';


const About = () => {
  const [index, setIndex] = useState(0);
  
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left  '>
     {/* <Circles />

       <motion.div 
        variants={fadeIn('right', 0.2)}   
        initial= 'hidden'
        animate= 'show'
        exit= 'hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
        
      >
        <Avatar />
      </motion.div>
 */}

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        <div className='flex flex-1 flex-col justify-center'>

          <motion.h2 
                variants={fadeIn('right', 0.2)}   
                initial= 'hidden'
                animate= 'show'
                exit= 'hidden'
               className='h2 pt-4 xl:pt-0'>Innovación a Través de  
               <span className='bg-gradient-to-r from-gradient-start '> Código y Creatividad.</span>  
          </motion.h2>
          <motion.p
              variants={fadeIn('right', 0.4)}   
              initial= 'hidden'
              animate= 'show'
              exit= 'hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '>El desarrollo de habilidades son el núcleo de mi
                                                                                    motivación. Comencé como autodidacta, con
                                                                                    libros y tutoriales para ampliar mis conocimientos. Posteriormente, realicé la
                                                                                    carrera de Tecnólogo en Desarrollo de Sistemas de Información,
                                                                                    ampliando aún más mi experiencia.
           </motion.p>

          <motion.div 
            variants={fadeIn('right', 0.6)}   
            initial= 'hidden'
            animate= 'show'
            exit= 'hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>

                <div className='text=2xl xl:text-4xl font-extrabold bg-gradient-to-r from-gradient-start  mb-2'>
                  <CountUp start={0} end={5} duration={12}/> +
                </div>

                <div>Años de experiencia</div>
                 
              </div>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>

                <div className='text=2xl xl:text-4xl font-extrabold bg-gradient-to-r from-gradient-start  mb-2' >
                  <CountUp start={0} end={10} duration={12}/> +
                </div>

                <div>Clientes satisfechos</div>
                 
              </div>

             {/*  <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>

                <div className='text=2xl xl:text-4xl font-extrabold bg-gradient-to-r from-gradient-start  mb-2' >
                  <CountUp start={0} end={100} duration={10}/> +
                </div>

                <div>Satisfied clients</div>
                 
              </div> */}
            </div>
          </motion.div>
        </div>


        <motion.div
            variants={fadeIn('right', 0.6)}   
            initial= 'hidden'
            animate= 'show'
            exit= 'hidden'
           className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:max-0 mb-4'>

            {
              aboutData.map((item, itemIndex) => (

                <div key={itemIndex} 
                     className={`${index === itemIndex && 'text-naranja after:w-[100%] after:bg-naranja after:transition-all after:duration-500 '}
                                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[0.2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                {item.title}
                </div>

              ))
            }

          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 xl:ml-20 items-center xl:items-start' >
            {
              aboutData[index].info.map((item, itemIndex) => (

                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>

                  <div className='font-light mb-2 md:mb-0'  >{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>

                  <div className='flex gap-x-4'>
                    {
                      item.icons?.map((icon) => (
                         <div key={icon.key} className='text-2xl text-white'>
                           
                          {icon.icon}
                           
                        </div>
                         
                      ))
                    }
                  </div>

                </div>
              ))
            }
          </div>
          
        </motion.div>

      </div>
    </div>
  )
};

export default About;




