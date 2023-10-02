'use client';
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '@nextui-org/react';
import Link from 'next/link';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <footer className='mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center '>
      <div className='grid grid-cols-2 gap-6'>

      <span className='col-span-1'>
        <h3 className='mt-16 font-medium text-center text-4xl text-light px-4'>
          Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-4 text-center text-base font-light text-light'>
          Subscribe to learn about new technology and updates.
        </p>
      </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-6 min-w-[384px] flex flex-col items-stretch p-2 space-y-3 rounded mx-4 col-span-1 '
      >
        <Input
          type='email'
          isRequired
          label='Email'
          {...register('Email', { required: true, maxLength: 100 })}
        />
        <Input
          type='tel'
          label='Mobile number'
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <Input
          type='text'
          label='Address'
          isRequired
          {...register('Address', { required: true, maxLength: 100 })}
        />
        <Textarea
          label='Description'
          placeholder='Enter your description & question'
          {...register('Description or Question ', { maxLength: 500 })}
        />

        <Input type='submit' />
      </form>

      </div>

    

      <div className='w-full mt-8 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row text-light items-center justify-between'>
        <span className='text-center'>2023 Catchit. All rights reserved.</span>
        <Link href='/sitemap.xml' className='text-center underline'>
          sitemap.xml
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
