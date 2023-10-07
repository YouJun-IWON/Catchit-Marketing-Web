
import ProfitAnimation from './components/dotlottieComponent/LottieAnimaiton1';
import Advertising from './components/lendingPage/Advertising';
import Charm from './components/lendingPage/Charm';
import ContactM from './components/lendingPage/ContactM';
import Detail from './components/lendingPage/Detail';
import Hero from './components/lendingPage/Hero';


import Hooking from './components/lendingPage/Hooking';
import Service from './components/lendingPage/Service';

export default function Home() {


  return (
    <main className='flex flex-col'>
      <Hero className="pb-0 lg:pb-10"/>

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
