import days from './days';

export const formatDate = (dateString, showTime = false) => {
  const date = new Date(dateString);

  const dateStamp = new Date(dateString).toLocaleString('en-US', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  });
  const timeStamp = date.toLocaleTimeString();

  return `${dateStamp} ${showTime ? `@${timeStamp}` : ''}`;
};
