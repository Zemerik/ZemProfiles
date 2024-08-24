const isNewContent = (inputDate) => {
  const currentDate = new Date();
  const inputDateObj = new Date(inputDate);

  const timeDifference = currentDate - inputDateObj;

  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference < 30;
};

export default isNewContent;
