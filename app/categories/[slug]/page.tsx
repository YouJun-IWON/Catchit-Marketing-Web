import { allPosts } from '@/.contentlayer/generated';
import PostLayoutThree from '@/app/components/PostComponent/PostLayoutThree';
import Categories from '@/app/components/Posts/Categories';
import siteMetadata from '@/app/utils/siteMetaData';
import GithubSlugger, { slug } from 'github-slugger';

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories: string | string[] = [];
  const paths = [{ slug: 'all' }];

  allPosts.map((post: any) => {
    if (post.isPublished) {
      post.tags.map((tag: any) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }: any) {
  return {
    title: `${params.slug.replaceAll('-', ' ')} Posts`,
    description: `Learn more about ${
      params.slug === 'all' ? 'web development' : params.slug
    } through our collections of expert posts and tutorials`,
  };
}

const CategoryPage = ({ params }: any) => {
  const allCategories = ['all'];

  const posts = allPosts.filter((post: any) => {
    return post.tags.some((tag: any) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }

      if (params.slug === 'all') {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className='mt-12 flex flex-col text-dark '>
      <div className='px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col'>
        <h1 className='mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl'># {params.slug}</h1>
        <span className='mt-2 inline-block'>
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32'>
        {posts.map((post, index) => (
          <article className='col-span-1 row-span-1 relative' key={index}>
            <PostLayoutThree post={post} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
