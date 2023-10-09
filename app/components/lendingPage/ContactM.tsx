'use client';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import PhoneAnimation from '../dotlottieComponent/LottiePhone';
import EmailAnimation from '../dotlottieComponent/LottieEmail';
import RegisterAnimation from '../dotlottieComponent/LottieRegister';

const ContactM = ({ className }: any) => {
  return (
    <section className={`${className}`}>
      <div className='relative'>
        <div className='flex items-center justify-center md:h-[800px] lg:h-96 h-[800px] bg-fixed bg-parallax bg-cover flex-col brightness-75'></div>
        <div className='absolute grid lg:grid-cols-4  grid-cols-2 text-white gap-12 inset-0  text-center py-10 px-10 items-center justify-center'>
          <div>
            <h1 className='text-4xl font-bold text-white  drop-shadow-2xl tracking-[3px] mb-4'>
              부담없이 문의해보세요
            </h1>

            <p className='text-slate-200'>
              문의 가능 시간 : 월~금 10:00~17:30 (점심시간 12:00~13:00){' '}
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <Card
              className='bg-transparent w-[250px] border-none'
              shadow='none'
              radius='lg'
              isPressable
              onPress={() => console.log('item pressed')}
            >
              <CardBody className='overflow-hidden p-0'>
                <PhoneAnimation className='w-[250px]' />
                {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt=""
              className="w-full object-cover h-[140px]"
              src={item.img}
            /> */}
              </CardBody>
              <CardFooter className='text-lg tracking-[3px] text-white justify-center'>
                <b>전화 문의</b>
              </CardFooter>
            </Card>
          </div>
          <div className='flex items-center justify-center'>
            <Card
              className='bg-transparent w-[250px] border-none'
              shadow='none'
              radius='lg'
              isPressable
              onPress={() => console.log('item pressed')}
            >
              <CardBody className='overflow-hidden p-0'>
                <EmailAnimation className='w-[250px]' />
              </CardBody>
              <CardFooter className='text-lg tracking-[3px] text-white justify-center'>
                <b>이메일 문의</b>
              </CardFooter>
            </Card>
          </div>
          <div className='flex items-center justify-center'>
            <Card
              className='bg-transparent w-[250px] border-none'
              shadow='none'
              radius='lg'
              isPressable
              onPress={() => console.log('item pressed')}
            >
              <CardBody className='overflow-hidden p-0'>
                <RegisterAnimation className='w-[250px]' />
              </CardBody>
              <CardFooter className='text-lg tracking-[3px] text-white justify-center'>
                <b>문의 및 신청 예약</b>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactM;
