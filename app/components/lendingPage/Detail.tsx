'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LendingRecentPosts from '../Posts/LendingRecentPosts';
import { allPosts } from '@/.contentlayer/generated';
import { DetailContent } from '@/constants/lendingPage';

const Detail = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      광고상품 디테일 설명 Section
      <div className='container px-4 mx-auto'>
        <div className='lg:flex justify-center'>
          <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
            <div className='lg:w-7/12'>
              {DetailContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className='tracking-[3px] mb-5 inline-block text-slate-500'
                >
                  {DetailContent.heading.subTitle}
                </motion.span>
              )}

              {DetailContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className='text-2xl lg:text-4xl mb-4 lg:mb-0'
                >
                  {DetailContent.heading.title}
                </motion.h2>
              )}
            </div>

            <div className='lg:w-5/12 self-end'>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.15,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className='text-slate-500'
              >
                {DetailContent.heading.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <LendingRecentPosts posts={allPosts} />
    </div>
  );
};

export default Detail;
