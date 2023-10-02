import { allPosts } from '@/.contentlayer/generated';
import PostCoverSection from '../components/Posts/PostCoverSection';
import FeaturePosts from '../components/Posts/FeaturePosts';
import RecentPosts from '../components/Posts/RecentPosts';

const postBox = () => {
  return (
    <>
      <PostCoverSection posts={allPosts} />
      <FeaturePosts posts={allPosts} />
      <RecentPosts posts={allPosts} />
    </>
  );
};

export default postBox;
