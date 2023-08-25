import {
    HiHomeModern,
    HiUserCircle,
    HiRectangleStack,
    HiViewColumns,
    HiChatBubbleLeftRight,
    HiEnvelopeOpen
} from 'react-icons/hi2';

import {
  BsPersonWorkspace
} from 'react-icons/bs';

import  Link  from 'next/link';
import { useRouter } from 'next/router';

//  links
const navData = [
  { name: 'home', path: '/', icon: <HiHomeModern/> },
  { name: 'about', path: '/about', icon: <HiUserCircle /> },
  { name: 'Experience', path: '/testimonials', icon: <BsPersonWorkspace/>,},
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'services', path: '/services', icon: <HiRectangleStack /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelopeOpen />,},
];

const Nav = () => {

  const router = useRouter();
  const pathname = router.pathname;

  return (

     <nav className='fixed bottom-0 z-50 w-full mt-auto h-max-botton-0 flex flex-col items-center gap-y-4 xl:justify-center xl:left-[2%] xl:w-16 xl:max-w-md xl:h-screen '>
      
      <div className='flex w-full gap-y-10 px-4 h-[80px] py-8 bg-white/10 backdrop-blur-sm 
                      text-3xl xl:text-xl xl:flex-col items-center justify-between xl:justify-center xl:px-0 xl:h-max xl:rounded-xl'>
        {
          navData.map((link) => 
              (
                <Link className={`${link.path === pathname && 'bg-gradient-to-r from-gradient-start'} relative flex  item-center group 
                                                             hover:bg-gradient-to-r from-gradient-start transition-all-duration-300 `}
                      href={link.path} key={link.name}>

                  <div className='absolute pl-14 left-0 hidden xl:group-hover:flex'>
                    <div className='bg-white relative flex text-primary items-center p-[10px] rounded-[6px]'>
                      <div className='text-[15px] leading-none font-semibold capitalize'>
                      
                         {link.name}
                      
                      </div> 
                      <div className='border-solid border-l-transparent border-l-8 border-r-white border-r-0 absolute -left-2'></div>

                    </div> 
                  </div> 
                  <div>{link.icon}</div>

                </Link>
            )
            
          )
        }
       </div>
    </nav>
  )
};

export default Nav;
