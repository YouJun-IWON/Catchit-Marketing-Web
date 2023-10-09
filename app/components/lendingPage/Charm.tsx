'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonialContent } from '@/constants/lendingPage';

const Charm = ({ className }: any) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);

  const sliderRef: any = useRef(null);

  useEffect(() => {
    setIsEnd(sliderRef.current.swiper.isEnd);
    setIsBeginning(sliderRef.current.swiper.isBeginning);
  });

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={`${className} overflow-hidden`}>
      광고 효과 어필 Section
      <div className='container px-4 mx-auto'>
        <div className='flex justify-center'>
          <div className='w-full md:w-8/12 flex gap-0 items-center'>
            <div className='text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16'>
              {testimonialContent.heading.subTitle && (
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
                  {testimonialContent.heading.subTitle}
                </motion.span>
              )}

              {testimonialContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className='text-2xl lg:text-4xl '
                >
                  {testimonialContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className='lg:flex justify-start lg:justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className='w-full lg:w-10/12 lg:flex gap-0 items-center'
          >
            <Swiper
              ref={sliderRef}
              speed={700}
              spaceBetween={30}
              onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
              className='z-50 py-32 mb-7 relative flex items-center'
            >
              {testimonialContent.testimonials.map((testimonial, idx) => (
                <SwiperSlide className='w-full' key={testimonial.name}>
                  <div className='block md:flex overflow-y-visible mt-10 items-stretch bg-white'>
                    <div className='md:w-4/12'>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={379}
                        height={320}
                        className='object-cover object-center !h-full !w-full'
                      />
                    </div>

                    <div className='md:w-8/12 p-7 md:p-16 flex items-center'>
                      <div>
                        <blockquote className='text-lg mb-7'>
                          <span className='text-[200px] leading-[0] relative text-catchitBlue block'>
                            &ldquo;
                          </span>
                          {testimonial.quote}
                        </blockquote>
                        <div className='flex space-x-3 text-sm'>
                          <strong>{testimonial.name}</strong>
                          <span>&mdash;</span>
                          <span>{testimonial.titleRole}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className='flex justify-center'
        >
          <div className='flex space-x-3'>
            <div
              onClick={prevHandler}
              className={`${
                isBeginning == true
                  ? 'opacity-30 bg-slate-300 text-slate-600 !cursor-pointer'
                  : 'opacity-100 bg-catchitYellow text-white'
              } relative top-0 group transition-all duration-300 ease-in-aut w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white  ${
                  isBeginning == true
                    ? 'group-hover:!text-slate-600'
                    : 'group:hover:text-white'
                }`}
              />
            </div>
            <div
              onClick={nextHandler}
              className={`${
                isEnd == true
                  ? 'opacity-30 bg-slate-300 text-slate-600 !cursor-pointer'
                  : 'opacity-100 bg-catchitYellow text-white'
              } relative top-0 group transition-all duration-300 ease-in-aut w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white  ${
                  isEnd == true
                    ? 'group-hover:!text-slate-600'
                    : 'group:hover:text-white'
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Charm;
