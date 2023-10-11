'use client';
import { BiSolidHeart } from 'react-icons/bi';
import Link from 'next/link';
import { footerContent } from '@/constants/lendingPage';

const Copyright = () => {
  return (
    <div className='pt-7 mt-3 md:mt-7 md:pt-7 border-t border-t-gray-100 text-center text-slate-500'>
      <p className='text-center items-center mx-auto text-sm'>
        &copy; 2023{' '}
        <Link href='/' className='text-[#06b6d4]'>
          Catchit
        </Link>
        . All rights reserved.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='mt-20 py-4 md:py-8 overflow-hidden w-full h-full relative'>
      <div className='container px-4 mx-auto z-20 relative'>
        <div className='md:flex'>
          <div className='md:w-4/12 mb-10 md:mb-0'>
            <Link href='/' className='text-[22px] text-slate-800 font-bold'>
              Catchit.
            </Link>
          </div>

          <div className='md:w-8/12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
              {footerContent.footerLinks.map((item, idx) => (
                <div className='mb-10 md:mb-0' key={item.heading}>
                  <h3 className='text-slate-800 mb-3'>{item.heading}</h3>
                  <ul className='list-none'>
                    {item.links.map((link, idx) => (
                      <li className='mb-2' key={link.label}>
                        <Link
                          href={link.href}
                          className={`${
                            link.badge ? 'flex gap-2 items-center' : ''
                          } text-slate-500 duration-300 transition-all ease-in-out hover:text-catchitBlue`}
                        >
                          {link.badge ? (
                            <>
                              <span>{link.label}</span>
                              <span className='py-0.5 px-2 rounded-full bg-yellow-100 border border-yellow-600 text-[10px] text-yellow-600 font-semibold'>
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Copyright />
      </div>

      {/* <span className='col-span-1'>
        <h3 className='mt-16 font-medium text-center text-4xl  px-4'>
          Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-4 text-center text-base font-light '>
          Subscribe to learn about new technology and updates.
        </p>
      </span>
     

    

      <div className='w-full mt-8 relative font-medium border-t border-solid  py-6 px-8 flex flex-row  items-center justify-between'>
        <span className='text-center'>2023 Catchit. All rights reserved.</span>
        <Link href='/sitemap.xml' className='text-center underline'>
          sitemap.xml
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
