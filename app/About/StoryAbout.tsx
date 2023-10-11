'use client';
import { storyContent } from '@/constants/aboutPage';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StoryAbout = ({ className }: any) => {
  return (
    <section className={`${className}`}>
      StoryAbout Section
      <div className='container px-4 mx-auto'>
        <div className='md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7 '>
          <div className='md:w-4/12 self-center space-y-7 mb-7 md:mb-0'>
            {storyContent.column1.imgs.map((item, idx) => {
              idx *= 0.5;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ''
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className='w-4/12 space-y-7 mb-7 md:mb-0'>
            {storyContent.column2.imgs.map((item, idx) => {
              idx *= 0.5;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ''
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className='md:w-4/12 self-center space-y-7'>
            {storyContent.column3.imgs.map((item, idx) => {
              idx *= 0.5;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ''
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: {
             delay: 0.8,
             duration: 0.5,
           },
         }}
         viewport={{ once: true }}
        
        className='lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto'>
          {storyContent.storyText.heading && (
            <h2 className='text-2xl md:text-3xl text-slate-800 mb-5'>
              {storyContent.storyText.heading}
            </h2>
          )}
          {storyContent.storyText.p1 && (
            <p className='leading-relaxed text-slate-500 mb-7'>
              {storyContent.storyText.p1}
            </p>
          )}

{storyContent.storyText.p2 && (
            <p className='leading-relaxed text-slate-500 mb-10'>
              {storyContent.storyText.p2}
            </p>
          )}

          <p>
            <Image src={storyContent.storyText.signature}
            alt={storyContent.storyText.name}
            width={338}
            height={113}
            className='w-48 block mb-2' />
            <strong className='block mb-2 text-slate-800 font-medium'>
              {storyContent.storyText.name + " "}
              <span className='text-slate400'>
                {storyContent.storyText.roleTitle}
              </span>
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryAbout;
