import { format, parseISO } from 'date-fns';
import { slug } from 'github-slugger';
import Link from 'next/link';
import ViewCounter from './ViewCounter';

const PostDetails = ({ post, slug: postSlug }: any) => {
  return (
    <div className='px-2 md:px-10 bg-catchitBlue text-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg'>
      <time className='m-3'>
        {format(parseISO(post.publishedAt), 'LLL d, yyyy')}
      </time>

      <span className='m-3'>
        <ViewCounter slug={postSlug} />
      </span>
      <div className='m-3'>{post.readingTime.text}</div>
      <Link href={`/categories/${slug(post.tags[0])}`} className='m-3'>
        # {post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
