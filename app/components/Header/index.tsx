import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='w-full p-4 px-10 flex items-center justify-between'>
      <Logo />
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2    bg-light-80 backdrop-blur-sm'>
        <Link href='/' className='mr-2'>
          Home
        </Link>
        <Link href='/about' className='mr-2'>
          About
        </Link>
        <Link href='/contact'>Contact</Link>
      </nav>
      <div><a className='inline-block w-6 h-6 mr-4'>
      <div className='hover:scale-125 transition-all ease duration-200'>Social Links</div>
        </a></div>
    </div>
  );
};

export default Header;
