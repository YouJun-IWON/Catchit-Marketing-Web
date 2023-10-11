import { cx } from '@/app/utils';
import Link from 'next/link';

const Category = ({ link = '#', name, active, ...props }: any) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full  border border-solid border-dark hover:scale-105 transition-all ease duration-200 m-2',

        props.className,
        active ? 'bg-dark text-light' : 'bg-light text-dark'
      )}
    >
      # {name}
    </Link>
  );
};

export default Category;
