import { allPosts } from '@/.contentlayer/generated';
import PostCoverSection from './components/Posts/PostCoverSection';
import FeaturePosts from './components/Posts/FeaturePosts';
import RecentPosts from './components/Posts/RecentPosts';

export default function Home() {
  console.log(allPosts);
  return (
    <main className='flex flex-col items-center justify-center'>
      <PostCoverSection posts={allPosts} />
      <FeaturePosts posts={allPosts} />
      <RecentPosts posts={allPosts} />
    </main>
  );
}
