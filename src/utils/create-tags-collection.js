import { formatSlug } from './format-slug';

export const createTagsCollection = (collections) => {
  return collections
    .map((collection) => {
      const tags = collection.data?.tags || [];

      return tags
        .map((tag) => {
          const slug = formatSlug(tag) || '';
          return {
            name: tag || '',
            slug,
          };
        })
        .flat();
    })
    .flat()
    .filter((item, index, self) => {
      const { name } = item;
      return name && index === self.findIndex((obj) => obj.name === name);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
};
