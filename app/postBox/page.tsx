import { allPosts } from '@/.contentlayer/generated';
import PostCoverSection from '../components/Posts/PostCoverSection';
import FeaturePosts from '../components/Posts/FeaturePosts';
import RecentPosts from '../components/Posts/RecentPosts';

const postBox = () => {
  return (
    <div className='py-10 mb-20'>
      <PostCoverSection posts={allPosts} />
      <FeaturePosts posts={allPosts} />
      <RecentPosts posts={allPosts} />
    </div>
  );
};

export default postBox;
