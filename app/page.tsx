import Advertising from './components/lendingPage/Advertising';
import Charm from './components/lendingPage/Charm';
import ContactM from './components/lendingPage/ContactM';
import Detail from './components/lendingPage/Detail';
import Hero from './components/lendingPage/Hero';

import Hooking from './components/lendingPage/Hooking';
import PHero from './components/lendingPage/PHero(pending)/page';
import Register from './components/lendingPage/Register';
import Service from './components/lendingPage/Service';

export default function Home() {
  return (
    <main className='flex flex-col -mt-20'>
      {/* <PHero /> */}
      <Hero className='mt-24 md:mt-20 py-5' />

      <Hooking className='py-16 overflow-hidden lg:py-16' />
      <Service className='py-16 !pt-32 lg:py-32' />
      <ContactM />
      <Advertising className='pt-32 pb-0' />
      <Charm className='py-16 lg:py-32' />
      <Detail className='pt-14 pb-15 lg:pb-32 ' />
      <Register className='py-16 pt-64 -mt-48 lg:py-32 bg-catchitBlue' />
    </main>
  );
}
