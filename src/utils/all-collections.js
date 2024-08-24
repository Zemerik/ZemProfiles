import { getCollection } from 'astro:content';

export const profiles = await getCollection('profiles');

export const collections = [...profiles];

export const search = collections
  .filter((item) => item.data.draft !== true)
  .map((data) => {
    const {
      slug,
      data: { base, title, date },
    } = data;

    return {
      date: date,
      title: title,
      base: base,
      path: `/${base}/${slug}`,
    };
  })
  .sort((a, b) => b.date - a.date);
