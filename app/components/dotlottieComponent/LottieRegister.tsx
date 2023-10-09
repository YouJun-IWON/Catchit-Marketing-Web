'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const RegisterAnimation = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <DotLottiePlayer src='/register.lottie' autoplay loop></DotLottiePlayer>
    </div>
  );
};

export default RegisterAnimation;
