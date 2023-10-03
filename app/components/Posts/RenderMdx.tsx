'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

const mdxComponent = {
  Image,
};

const RenderMdx = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className='col-span-8 font-in prose'>
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
