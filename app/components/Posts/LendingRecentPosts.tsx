import { sortPosts } from '@/app/utils';

import { motion } from 'framer-motion';
import LendingPostLayoutThree from '../PostComponent/LendingPostLayoutThree';

const LendingRecentPosts = ({ posts }: any) => {
  const sortedPosts = sortPosts(posts);
  return (
    <section className='w-full mt-10 px-32 flex flex-col items-center justify-center'>
      <div className='grid grid-cols-3 gap-16 mt-16'>
        {sortedPosts
          .slice(sortedPosts.length - 3, sortedPosts.length)
          .map((post: any, index: any) => {
            index *= 0.05;
            return (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                key={index}
                className='col-span-1 row-span-1 relative'
              >
                <LendingPostLayoutThree post={post} />
              </motion.article>
            );
          })}
      </div>
    </section>
  );
};

export default LendingRecentPosts;
