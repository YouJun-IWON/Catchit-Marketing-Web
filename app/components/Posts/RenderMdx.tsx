'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

const mdxComponent = {
  Image,
};

const RenderMdx = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className='col-span-8 font-in prose prose-lg max-w-max prose-blockquote:bg-catchitYellow/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accentDark prose-blockquote:not-italic prose-blockquote:rounded-r-lg
    
    prose-li:marker:text-accent'>
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
