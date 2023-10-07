'use client';
import { useEffect } from 'react';

import Intro from './Intro';
import Description from './Description';

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className='bg-catchitBlue'>
      <Intro />
      <Description />
    </div>
  );
};

export default page;
