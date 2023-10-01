import { cx } from '@/app/utils';
import Link from 'next/link';

const Tag = ({ link = '#', name, ...props }: any) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border border-solid border-light hover:scale-105 transition-all ease duration-200',
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
