'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const EmailAnimation = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <DotLottiePlayer src='/email.lottie' autoplay loop></DotLottiePlayer>
    </div>
  );
};

export default EmailAnimation;
