'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroContent } from '@/constants/lendingPage';
import { Button } from '@nextui-org/react';

import miniques_lagoon from '@/public/HeroImages/miniques_lagoon.jpg';
import CoffeeAnimation from '../dotlottieComponent/LottieAnimaiton2';

const Hero = ({ className }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ['100%', '50%']);

  return (
    <section className={`${className}`} ref={ref}>
      <div className='container px-4 mx-auto'>
        <div className='lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between'>
          <div className='lg:w-4/12 z-[3] relative'>
            {heroContent.intro.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className='mb-5 tracking-[3px] inline-block text-gray-600'
              >
                {heroContent.intro.subTitle}
              </motion.span>
            )}

            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className='text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8'
              >
                {heroContent.intro.title}
              </motion.h1>
            )}

            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className='leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-10 lg:mb-16'
              >
                {heroContent.intro.description}
              </motion.p>
            )}

            {heroContent.intro.btn.label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link className='' href={heroContent.intro.btn.href}>
                  <Button
                    radius='full'
                    className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold tracking-[2px]'
                  >
                    {heroContent.intro.btn.label}
                  </Button>
                </Link>
              </motion.p>
            )}
          </div>
          <div className='lg:w-7/12 relative'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll1}}
              className='z-[2] relative bg-cover bg-center'
            >
              <Image src={miniques_lagoon} width={828} height={985} alt='Hero Image' />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.4,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            style={{ y: imgScroll2}}
            className='absolute bottom-0 lg:bottom-[200px] -left-[400px] z-[2]'>
           <CoffeeAnimation />
              
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
