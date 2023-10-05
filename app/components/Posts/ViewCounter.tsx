'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }: any) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: slug,
        });

        if (error) {
          console.log('Error incrementing view count inside try block:', error);
        }
      } catch (e) {
        console.error('An error ocurred while incrementing the view count:', e);
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single();

        if (error) {
          console.log('Error incrementing view count inside try block:', error);
        }

        setViews(data ? data.count : 0);
      } catch (e) {
        console.error('An error ocurred while incrementing the view count:', e);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
