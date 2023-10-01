import Image from 'next/image';
import Link from 'next/link';
import catchitLogo from '@/public/catchitLogo.png';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark'>
      <div className='w-17 overflow-hidden'>
        {/* <Image
          src={catchitLogo}
          alt='Catchit'
          className='w-full h-auto rounded-lg'
        /> */}
        catchit
      </div>
      
    </Link>
  );
};

export default Logo;
