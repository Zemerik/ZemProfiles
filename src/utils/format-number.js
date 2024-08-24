export const formatNumber = (number) => {
  const formatter = new Intl.NumberFormat();

  return formatter.format(number);
};
