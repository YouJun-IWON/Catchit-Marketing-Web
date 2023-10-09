'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const ApplyAnimation = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <DotLottiePlayer src='/apply.lottie' autoplay loop></DotLottiePlayer>
    </div>
  );
};

export default ApplyAnimation;
