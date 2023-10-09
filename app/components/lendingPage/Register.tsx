'use client';

import { RegisterContent } from '@/constants/lendingPage';
import { motion } from 'framer-motion';
import { BiSolidPaperPlane } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { Checkbox, Input, Textarea } from '@nextui-org/react';
import RegisterModal from '../Modal/RegisterModal';
import { useState } from 'react';

const Register = ({ className }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const [isSelected, setIsSelected] = useState(false);

  return (
    <section className={`${className}`}>
      신청 및 문의 Section
      <div className='container grid grid-cols-3 px-4 mx-auto'>
        <div className='flex col-span-1 justify-center'>
          <div className='w-8/12 flex gap-0 items-center'>
            <div className='text-center w-screen max-w-md mx-auto mb-10'>
              {RegisterContent.heading.subtitle && (
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
                  className='tracking-[3px] mb-5 inline-block text-white'
                >
                  {RegisterContent.heading.subtitle}
                </motion.span>
              )}
              {RegisterContent.heading.title && (
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
                  className='text-2xl lg:text-4xl text-white'
                >
                  {RegisterContent.heading.title}
                </motion.h2>
              )}
              {RegisterContent.heading.description && (
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
                  className='mt-10 leading-relaxed text-white'
                >
                  {RegisterContent.heading.description}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className='flex col-span-2 w-full flex-col mx-auto justify-center'>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className='mt-6 min-w-[384px] flex flex-col items-stretch p-2 space-y-3 rounded mx-4 col-span-1 '
          >
            <Input
              type='email'
              isRequired
              label='이메일'
              {...register('Email', { required: true, maxLength: 100 })}
            />
            <Input
              type='tel'
              label='전화번호 (010-0000-0000)'
              {...register('Mobile number', {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            <Input
              type='text'
              label='가게 주소 및 상호명'
              isRequired
              {...register('Address', { required: true, maxLength: 100 })}
            />
            <Textarea
              label='추가 문의 사항'
              placeholder='서비스에 대해 궁금한 점이나 하고 싶은 말들을 편하게 남겨주세요!'
              {...register('Description or Question ', { maxLength: 500 })}
            />
            <div className='text-slate-500'>
              <Checkbox isSelected={isSelected} onValueChange={setIsSelected} ><span className='text-white'>
              개인정보 처리 동의&nbsp;&nbsp;</span> </Checkbox>
              <RegisterModal setIsSelected={setIsSelected}/>
            </div>

            <Input type='submit' />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Register;
