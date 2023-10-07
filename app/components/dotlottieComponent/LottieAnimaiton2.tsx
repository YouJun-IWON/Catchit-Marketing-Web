'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const CoffeeAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src='/Animation - 1696694827657.lottie'
        autoplay
        loop
      ></DotLottiePlayer>
    </div>
  );
};

export default CoffeeAnimation;
