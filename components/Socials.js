import Link from "next/link";
import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiTwitterLine,
  RiSkypeLine
} from 'react-icons/ri'


const Socials = () => {
  return (

    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/roberth-morales-79598413a'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/roberth1927'}target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://twitter.com/robinmoralesq'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={'https://join.skype.com/invite/lA8oOo7ftdsh'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiSkypeLine />
      </Link>
    </div>

  )
};

export default Socials;
