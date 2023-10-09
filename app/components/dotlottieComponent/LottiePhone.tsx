'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const PhoneAnimation = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <DotLottiePlayer src='/phone.lottie' autoplay loop></DotLottiePlayer>
    </div>
  );
};

export default PhoneAnimation;
