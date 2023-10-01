import { compareDesc, parseISO } from 'date-fns';

export const cx = (...classNames: any) => classNames.filter(Boolean).join(' ');

export const sortPosts = (posts: any) => {
  return posts
    .slice()
    .sort((a: any, b: any) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
