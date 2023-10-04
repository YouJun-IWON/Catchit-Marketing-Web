import { format, parseISO } from 'date-fns';
import { slug } from 'github-slugger';
import Link from 'next/link';

const PostDetails = ({ post, slug: postSlug }: any) => {
  console.log(post);
  return (
    <div className='px-10 bg-catchitBlue text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg'>
      <time className='m-3'>
        {format(parseISO(post.publishedAt), 'LLL d, yyyy')}
      </time>

      <span className='m-3'>10 views</span>
      <div className='m-3'>{post.readingTime.text}</div>
      <Link href={`/categories/${slug(post.tags[0])}`} className='m-3'>
        # {post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
