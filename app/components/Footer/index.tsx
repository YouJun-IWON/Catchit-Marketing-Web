'use client';

import Link from 'next/link';

const Footer = () => {


  return (
    <footer className='mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center '>
   

      <span className='col-span-1'>
        <h3 className='mt-16 font-medium text-center text-4xl text-light px-4'>
          Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-4 text-center text-base font-light text-light'>
          Subscribe to learn about new technology and updates.
        </p>
      </span>
     

    

      <div className='w-full mt-8 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row text-light items-center justify-between'>
        <span className='text-center'>2023 Catchit. All rights reserved.</span>
        <Link href='/sitemap.xml' className='text-center underline'>
          sitemap.xml
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
