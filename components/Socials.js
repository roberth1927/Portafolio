import Link from "next/link";
import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiTwitterLine,
  RiSkypeLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 xl:gap-x-8 xl:flex-col xl:pt-24 xl:gap-y-4 text-2xl">
      <Link
        href={'https://www.linkedin.com/in/roberth-morales-79598413a'}
        target="_blank"
        className="text-naranja transition-all duration-300 xl:rounded-full "
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={'https://github.com/roberth1927'}
        target="_blank"
        className="text-naranja transition-all duration-300 "
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'https://twitter.com/robinmoralesq'}
        target="_blank"
        className="text-naranja transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={'https://join.skype.com/invite/lA8oOo7ftdsh'}
        target="_blank"
        className="text-naranja transition-all duration-300"
      >
        <RiSkypeLine />
      </Link>
    </div>
  )
};

export default Socials;
