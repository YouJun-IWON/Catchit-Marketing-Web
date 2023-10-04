import { slug } from 'github-slugger';
import Category from './Category';

const Categories = ({ categories, currentSlug }: any) => {
  return (
    <div className='px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-10'>
      {categories.map((cat: any) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
