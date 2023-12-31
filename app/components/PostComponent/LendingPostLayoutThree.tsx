import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const LendingPostLayoutThree = ({ post }: any) => {
  return (
    <div className='group rounded-xl bg-white flex flex-col items-center text-dark'>
      <Link href={post.url} className='h-full rounded-xl overflow-hidden'>
        <Image
          src={post.image.filePath.replace('../public', '')}
          placeholder='blur'
          blurDataURL={post.image.blurhashDataUrl}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300'
        />
      </Link>

      <div className='flex flex-col mt-4 w-full h-40 max-h-full p-5'>
        <span className='uppercase text-catchitBlue font-semibold text-sm'>
          {post.tags[0]}
        </span>
        <Link href={post.url} className='inline-block my-1'>
          <h2 className='font-semibold capitalize text-lg'>
            <span className='bg-gradient-to-r from-catchitBlue to-catchitBlue bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
              {post.title}
            </span>
          </h2>
        </Link>

        <span className='capitalize text-dark/50 font-semibold text-base'>
          {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default LendingPostLayoutThree;
