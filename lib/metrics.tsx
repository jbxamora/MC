import 'server-only';

import { queryBuilder } from './planetscale';
import { cache } from 'react';

export const getBlogViews = cache(async () => {
  
  const data = await queryBuilder
    .selectFrom('views')
    .select(['count'])
    .execute();

  return data.reduce((acc, curr) => acc + Number(curr.count), 0);
});

