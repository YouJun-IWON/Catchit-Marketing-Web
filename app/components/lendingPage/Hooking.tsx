'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { hookingContent } from '@/constants/lendingPage';
import { Button } from '@nextui-org/react';

const Hooking = ({ className }: any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ['30%', '-10%']);
  const img2 = useTransform(scrollYProgress, [0, 1], ['100%', '100%']);

  return (
    <section className={`${className}`} ref={ref}>
      Hooking Section
      <div className='container px-4 mx-auto'>
        <div className='text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]'>
          {hookingContent.heading.subTitle && (
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
              {hookingContent.heading.subTitle}
            </motion.span>
          )}

          {hookingContent.heading.title && (
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
              className='text-2xl lg:text-4xl'
            >
              {hookingContent.heading.title}
            </motion.h2>
          )}
        </div>

        <div className='lg:flex justify-center'>
          <div className='lg:w-8/12 lg:flex gap-20 items-center'>
            <div className='mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative'>
              <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{
                 opacity: 1,
                 x: 0,
                 transition: {
                   delay: 0.4,
                   duration: 0.5,
                 },
               }}
               viewport={{ once: true }}
              style={{ y: img1 }} className='z-[2] relative'>
                <Image
                  src={hookingContent.content.img}
                  className='object-cover !h-[550px] !w-full lg:max-w-2xl object-center'
                  width={400}
                  height={600}
                  alt='Hooking Image'
                />
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
                style={{ y: img2 }}
                className='absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]'
              >
                <Image
                  src={'/lendingImages/dots.svg'}
                  alt='Dots image'
                  width={200}
                  height={200}
                  className='w-64'
                />
              </motion.div>
            </div>
            <div className='lg:w-6/12'>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className='text-2xl mb-7 text-slate-800'
              >
                {hookingContent.content.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className='leading-relaxed mb-14 text-slate-500'
              >
                {hookingContent.content.description}
              </motion.p>

              <motion.p
               initial={{ opacity: 0, y: 10 }}
               whileInView={{
                 opacity: 1,
                 y: 0,
                 transition: {
                   delay: 0.5,
                   duration: 0.5,
                 },
               }}
               viewport={{ once: true }}
              
              >
 <Link className='' href={hookingContent.content.btn.href}>
                  <Button
                    radius='full'
                    className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold tracking-[2px]'
                  >
                    {hookingContent.content.btn.label}
                  </Button>
                </Link>

              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hooking;
