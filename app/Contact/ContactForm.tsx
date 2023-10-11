'use client';
import Image from 'next/image';

import { RegisterContent } from '@/constants/lendingPage';
import { motion } from 'framer-motion';
import { BiSolidPaperPlane } from 'react-icons/bi';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Checkbox, Input, Textarea } from '@nextui-org/react';
import RegisterModal from '../components/Modal/RegisterModal';
import { useState } from 'react';

const ContactForm = ({ className }: any) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const [isSelected, setIsSelected] = useState(false);

  return (
    <motion.section
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
      className={`${className}`}
    >
      <div className='container px-4 mx-auto'>
        <div className='lg:flex mb-12'>
          <div className='lg:w-6/12 flex-1'>
            <Image
              src='/lendingImages/project-4-min.jpg'
              width={1000}
              height={100}
              alt='Image'
              className='object-cover object-center max-w-full h-full bg-white'
            />
          </div>
          <div className='lg:w-6/12 flex-1  bg-catchitBlue'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=' h-full flex flex-col p-14 mx-4  items-stretch  '
            >
              <div className='w-full flex flex-col items-center text-center'>
                <h2 className='text-white w-8/12 text-3xl '>
                  도움이 필요하신가요? 편하게 물어보세요.
                </h2>
                <p className='text-white w-8/12 py-4 '>
                  해당 양식에 맞춰서 적으신 후 신청 버튼을 눌러주세요. 캐칫의
                  최신 소식과 함께 다양한 혜택을 담은 우선권을 부여합니다.
                </p>
              </div>

              <div className='space-y-3'>
                <Input
                  type='name'
                  isRequired
                  label='이름 (ex. 홍길동)'
                  {...register('Name', {
                    required: true,
                    maxLength: 20,
                  })}
                />
                <Input
                  type='email'
                  isRequired
                  label='이메일'
                  {...register('Email', {
                    required: true,
                    maxLength: 100,
                  })}
                />
                <Input
                  type='tel'
                  label='전화번호 (ex. 01011112222)'
                  {...register('Mobile number', {
                    minLength: 9,
                    maxLength: 11,
                  })}
                />
                <Input
                  type='address'
                  label='가게 주소 및 상호명  (ex. 도로명주소 / 가게 상호명)'
                  isRequired
                  {...register('Address', { required: 'true', maxLength: 100 })}
                />
                <Textarea
                  label='추가 문의 사항'
                  placeholder='서비스에 대해 궁금한 점이나 하고 싶은 말들을 편하게 남겨주세요!'
                  {...register('Description or Question ', { maxLength: 500 })}
                />
                <div className='text-slate-500'>
                  <Controller
                    name='checkbox'
                    control={control}
                    rules={{ required: '개인정보 취급에 동의해주세요.' }}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        isSelected={isSelected}
                        onValueChange={setIsSelected}
                      >
                        <span className='text-white'>
                          개인정보 처리 동의&nbsp;&nbsp;
                        </span>{' '}
                      </Checkbox>
                    )}
                  />

                  <RegisterModal setIsSelected={setIsSelected} />
                  {errors.checkbox && (
                    <p className='text-sm leading-relaxed text-red-600'>
                      {errors.checkbox.message?.toString()}
                    </p>
                  )}
                </div>
              </div>

              <div className='w-full flex justify-center'>
                <button
                  type='submit'
                  className='w-6/12 relative rounded px-5 py-2.5 overflow-hidden group bg-teal-600 mt-3 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300'
                >
                  <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-60 ease'></span>
                  <span className='relative tracking-[3px]'>신청하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
