'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AdvertisingContent } from '@/constants/lendingPage';
import Image from 'next/image';

const Advertising = ({ className }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);

  return (
    <section className={`${className}`} ref={ref}>
      광고 상품 소개 Section
      <div className='container px-4 mx-auto'>
        <div className='text-center lg:max-w-xl flex flex-col  mx-auto mb-20 lg:mb-32'>
          {AdvertisingContent.heading.subTitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className='tracking-[3px] mb-5 inline-block text-slate-500'
            >
              {AdvertisingContent.heading.subTitle}
            </motion.span>
          )}

          {AdvertisingContent.heading.title && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className='text-2xl lg:text-4xl'
            >
              {AdvertisingContent.heading.title}
            </motion.span>
          )}
        </div>

        <div className='lg:flex justify-center'>
          <div className='lg:w-8/12 lg:flex gap-20 items-start'>
            <div className='mb-7 lg:mb-0 lg:w-6/12 lg:order-2'>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: img1 }}
              >
                <Image
                  src='/lendingImages/img-square-2-min.jpg'
                  className='object-cover !w-full h-[500px] lg:max-w-2xl object-center'
                  width={400}
                  height={300}
                  alt='Image'
                />
              </motion.div>
            </div>
            <div className='lg:w-6/12'>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.9,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className='list-none'
              >
                {AdvertisingContent.whyUseItems.map((item, idx) => (
                  <li
                    className='flex space-x-4 items-start mb-7'
                    key={item.title}
                  >
                    <span className='text-xl grow-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-catchitBlue'>
                      {<item.icon className='z-20 relative text-white' />}
                    </span>
                    <div>
                      <h3 className='text-slate-800 text-base mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-slate-500'>{item.description}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
