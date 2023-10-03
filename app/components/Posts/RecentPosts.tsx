import { sortPosts } from '@/app/utils';
import Link from 'next/link';
import PostLayoutThree from '../PostComponent/PostLayoutThree';
import { Key } from 'react';

const RecentPosts = ({ posts }: any) => {
  const sortedPosts = sortPosts(posts);
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
      <div className='flex w-full justify-between'>
        <h2 className='inline-block font-bold capitalize text-4xl'>
          Recent Posts
        </h2>
        <Link
          href={'/categories/all'}
          className='inline-block font-medium text-catchitBlue underline underline-offset-2 text-lg'
        >
          view all
        </Link>
      </div>

      <div className='grid grid-cols-3 grid-rows-2 gap-16 mt-16'>
        {sortedPosts.slice(5, 11).map((post: any, index: Key | null | undefined) => {
          return (
            <article key={index} className='col-span-1 row-span-1 relative'>
              <PostLayoutThree post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
