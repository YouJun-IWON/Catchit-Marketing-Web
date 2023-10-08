import ProfitAnimation from './components/dotlottieComponent/LottieAnimaiton1';
import Advertising from './components/lendingPage/Advertising';
import Charm from './components/lendingPage/Charm';
import ContactM from './components/lendingPage/ContactM';
import Detail from './components/lendingPage/Detail';
import Hero from './components/lendingPage/Hero';

import Hooking from './components/lendingPage/Hooking';
import PHero from './components/lendingPage/PHero(pending)/page';
import Service from './components/lendingPage/Service';

export default function Home() {
  return (
    <main className='flex flex-col'>
      {/* <PHero /> */}
      <Hero className='pb-0 lg:pb-10' />

      <Hooking className='py-16 overflow-hidden lg:py-32' />
      <Service />
      <ContactM />
      <Advertising />
      <Charm />
      <Detail />
      {/* <ProfitAnimation /> */}
    </main>
  );
}
