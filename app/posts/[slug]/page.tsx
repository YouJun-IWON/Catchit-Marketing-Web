import { allPosts } from '@/.contentlayer/generated';

export default function PostPage({ params }: { params: { slug: string } }) {

  const blog = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return <div>My Posts: {params.slug}</div>;
}
