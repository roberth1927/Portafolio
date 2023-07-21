import {
    HiHomeModern,
    HiUserCircle,
    HiRectangleStack,
    HiViewColumns,
    HiChatBubbleLeftRight,
    HiEnvelopeOpen
} from 'react-icons/hi2';

import  Link  from 'next/link';
import { useRouter } from 'next/router';

//  links
const navData = [
  { name: 'home', path: '/', icon: <HiHomeModern/> },
  { name: 'about', path: '/about', icon: <HiUserCircle /> },
  { name: 'services', path: '/services', icon: <HiRectangleStack /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'testimonials', path: '/testimonials', icon: <HiChatBubbleLeftRight/>,},
  { name: 'contact', path: '/contact', icon: <HiEnvelopeOpen />,},
];

const Nav = () => {

  const router = useRouter();
  const pathname = router.pathname;

  return (

     <nav className='fixed bottom-0 z-50 w-full mt-auto h-max-botton-0 flex flex-col items-center gap-y-4 xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen '>
      
      <div className='flex w-full gap-y-10 px-4 h-[80px] py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:flex-col items-center justify-between xl:justify-center xl:px-0 xl:h-max xl:rounded-full'>
        {
          navData.map((link) => 
              (
                <Link className={`${link.path === pathname && 'text-accent'} relative flex  item-center group hover:text-accent transition-all-duration-300 `}
                      href={link.path} key={link.name}>

                  <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                    <div className='bg-white relative flex text-primary items-center p-[10px] rounded-[6px]'>
                      <div className='text-[15px] leading-none font-semibold capitalize'>
                      
                         {link.name}
                      
                      </div> 
                      <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                      </div>
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
