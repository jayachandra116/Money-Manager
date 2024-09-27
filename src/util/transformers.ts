export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getDatePickerDateString = (dateString: string) => {
  const fullDate = new Date(dateString);
  const year = `${fullDate.getFullYear()}`;
  let month: string | number = fullDate.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let date: string | number = fullDate.getDate();
  date = date < 10 ? `0${date}` : date;

  return `${year}-${month}-${date}`; //2024-09-27
};
