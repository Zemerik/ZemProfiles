import slugify from 'slugify';

export const formatSlug = (string) => {
  return slugify(string.replace(/\./g, '-'), {
    lower: true,
    strict: true,
  });
};
