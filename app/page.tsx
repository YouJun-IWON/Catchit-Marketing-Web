import ProfitAnimation from './components/dotlottieComponent/LottieAnimaiton1';
import Advertising from './components/lendingPage/Advertising';
import Charm from './components/lendingPage/Charm';
import ContactM from './components/lendingPage/ContactM';
import Detail from './components/lendingPage/Detail';
import Hero from './components/lendingPage/Hero/page';

import Hooking from './components/lendingPage/Hooking';
import Service from './components/lendingPage/Service';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Hero />

      <Hooking />
      <Service />
      <ContactM />
      <Advertising />
      <Charm />
      <Detail />
      {/* <ProfitAnimation /> */}
    </main>
  );
}
