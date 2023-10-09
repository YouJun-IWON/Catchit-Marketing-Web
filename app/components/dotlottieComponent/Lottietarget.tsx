'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const TargetAnimation = () => {
  return <DotLottiePlayer src='/target.lottie' autoplay loop></DotLottiePlayer>;
};

export default TargetAnimation;
