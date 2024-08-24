// https://cloudinary.com/documentation/image_transformations
// https://cloudinary.com/documentation/media_optimization
export const resizeImage = (url, width, height): string => {
  const string = url.split(/upload(?=.)/);
  const newUrl = `${string[0]}upload/h_${height},w_${width}/q_100/f_auto${string[1]}`;
  return newUrl;
};
