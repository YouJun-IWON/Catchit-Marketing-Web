'use client';
import { aboutContent } from '@/constants/aboutPage';
import React from 'react';
import { motion } from 'framer-motion';

const HeroContact = ({ className }: any) => {
  return (
    <section className={`${className}`}>
      <div className='container px-4 mx-auto'>
        <div className='lg:flex w-full lg:w-10/12 mx-auto items-center justify-between'>
          <div className='text-center lg:max-w-3xl mx-auto'>
            {aboutContent.heading.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.03,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className='tracking-[3px] mb-5 inline-block text-slate-500 '
              >
                Contact
              </motion.span>
            )}

            {aboutContent.heading.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.06,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className='text-3xl sm:text-4xl md:text-5xl'
              >
               Get in touch
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
