import { allPosts } from '@/.contentlayer/generated';
import PostCoverSection from './components/Posts/PostCoverSection';
import FeaturePosts from './components/Posts/FeaturePosts';

export default function Home() {
  console.log(allPosts);
  return (
    <main className='flex flex-col items-center justify-center'>
      <PostCoverSection posts={allPosts} />
      <FeaturePosts posts={allPosts} />
    </main>
  );
}
