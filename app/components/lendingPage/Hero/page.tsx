'use client';
import { useEffect } from 'react';
import styles from './styles.module.css';
import Intro from './Intro';

const page = () => {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <div className={styles.main}>
      Hero section
      <Intro />
    </div>
  );
};

export default page;
