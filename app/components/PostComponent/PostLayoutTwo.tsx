import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const PostLayoutTwo = ({ post }: any) => {
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark'>
      <Link
        href={post.url}
        className='col-span-4 h-full rounded-xl overflow-hidden'
      >
        <Image
          src={post.image.filePath.replace('../public', '')}
          placeholder='blur'
          blurDataURL={post.image.blurhashDataUrl}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          className='aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300'
        />
      </Link>

      <div className=' col-span-8 w-full'>
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
        <br />
        <span className='capitalize text-dark/50 font-semibold text-base'>
          {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default PostLayoutTwo;
