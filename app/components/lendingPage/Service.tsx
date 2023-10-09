'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { ServiceContent } from '@/constants/lendingPage';
import { Button } from '@nextui-org/react';

const Service = ({ className }: any) => {
  const transition = {
    duration: 0.1,
    delay: 0.1,
  };

  return (
    <>
      <section className={`${className}`}>
        Service Section
        <div className='container px-4 mx-auto'>
          <div className='lg:flex justify-center mb-20 lg:mb-36'>
            <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
              <div className='lg:w-7/12 mb-5 lg:mb-0'>
                {ServiceContent.heading.subTitle && (
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
                    className='tracking-[3px] text-sm mb-5 inline-block text-slate-500'
                  >
                    {ServiceContent.heading.subTitle}
                  </motion.span>
                )}
                {ServiceContent.heading.title && (
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
                    {ServiceContent.heading.title}
                  </motion.h2>
                )}
              </div>
              <div className='lg:w-5/12 self-end'>
                {ServiceContent.heading.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.6,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className='text-slate-500'
                  >
                    {ServiceContent.heading.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto'>
            {ServiceContent.steps.map((step, idx) => {
              idx *= 0.2;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition }}
                  className='group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-[#64C9C7] hover:shadow-2xl'
                >
                  <span className='text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0'>
                    {step.number}
                  </span>
                  <div className='absolute top-10 right-10'>
                    <span className='text-3xl text-catchitBlue duration-300 transition-all ease-in-out group-hover:text-white'>
                      <step.icon />
                    </span>
                  </div>
                  <div className='relative z-40 flex gap-3 items-start'>
                    <div className='font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-70'>
                      {step.number}
                    </div>
                    <div>
                      <h3 className='text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white'>
                        {step.title}
                      </h3>
                      <p className='leading-relaxed text-md text-slate-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white'>
                        {step.description}
                      </p>
                      <p>
                        <Link className='' href={step.btn.href}>
                          <Button
                            radius='full'
                            className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold text-[12px] tracking-[2px]'
                          >
                            {step.btn.label}
                          </Button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className='pt-7 lg:pt-60 pb-32 bg-[#facc15]'>
        <div className='container px-4 mx-auto'>
          <div className='lg:flex justify-center'>
            <div className='w-full lg:w-8/12 flex gap-0 items-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {ServiceContent.features.map((feature, idx) => {
                  idx *= 0.2;

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: idx,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      key={feature.title}
                      className='relative z-40 flex gap-3 items-start'
                    >
                      <div>
                        <span className='text-5xl text-white'>
                          <feature.icon />
                        </span>
                      </div>
                      <div>
                        <h3 className='text-2xl mb-4 text-white'>
                          {feature.title}
                        </h3>
                        <p className='leading-relaxed text-lg text-white text-opacity-90 mb-7'>
                          {feature.description}
                        </p>

                        <p>
                          <Link className='' href={feature.btn.href}>
                            <Button
                              radius='full'
                              className='bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow-lg font-bold text-[12px] tracking-[2px]'
                            >
                              {feature.btn.label}
                            </Button>
                          </Link>
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
