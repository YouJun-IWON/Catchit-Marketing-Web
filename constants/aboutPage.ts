import img1 from '@/public/lendingImages/img-square-1-min.jpg';
import img2 from '@/public/lendingImages/img-square-2-min.jpg';
import img3 from '@/public/lendingImages/img-square-3-min.jpg';
import img4 from '@/public/lendingImages/img-square-4-min.jpg';
import img5 from '@/public/lendingImages/img-square-5-min.jpg';

import post1 from '@/public/lendingImages/post-1-min.jpg';
import post2 from '@/public/lendingImages/post-2-min.jpg';

export const aboutContent = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: 'About Us',
  },
};

export const storyContent = {
  column1: {
    imgs: [
      {
        img: img5,
        alt: 'Team brainstorming',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img1,
        alt: 'Making a Plan',
        width: 1188,
        height: 1413,
      },
    ],
  },
  column2: {
    imgs: [
      {
        img: img2,
        alt: 'Team meeting',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-48 lg:h-64',
      },
      {
        img: post2,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-64',
      },
      {
        img: img4,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-64',
      },
    ],
  },
  column3: {
    imgs: [
      {
        img: post1,
        alt: 'Building',
        width: 1188,
        height: 1413,
        tailwindClass: ''
      },
      {
        img: img3,
        alt: 'Writing a plan',
        width: 1188,
        height: 1413,
      },
    ],
  },
  storyText: {
    heading: 'Crafting Spaces, Shaping Dreams',
    p1: 'Envisioned by a group of passionate architects, our story is one of perseverance and boundless creativity. We started as a small team with big dreams, driven by the belief that architecture holds the power to shape lives and communities. Through years of dedication and unwavering commitment, we have evolved into a dynamic force, seamlessly blending aesthetics with functionality to create spaces that inspire and endure.',
    p2: 'Our journey has been defined by our relentless pursuit of excellence and our eagerness to embrace new challenges. From the early projects that ignited our spark to the iconic structures that now stand as testaments to our vision, every step of our journey is etched with a passion for innovation. Today, we stand on the shoulders of our accomplishments, guided by the same spirit that set us on this path to shape a world that celebrates the harmony of design, environment, and human experience.',
    signature: '/lendingImages/Bill_Smith_Signature.svg',
    name: 'Bill Smith',
    roleTitle: 'CEO and Co-Founder',
  },
};
