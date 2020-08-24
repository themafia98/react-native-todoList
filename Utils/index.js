import moment from 'moment';

const sortByType = (type, items) => {
  const today = moment(moment().format("DD.MM.YYYY"), 'DD.MM.YYYY');

  return items.filter(item => {
    if (!item) return false;

    const { date = "" } = item;

    const parsedDate = moment(date, "DD.MM.YYYY");
    switch (type) {
      case "current":
        return parsedDate.isSame(today);
      case "future":
        return parsedDate.isAfter(today);
      case "past":
        return parsedDate.isBefore(today);
      default:
        return true;
    }
  });
};

export {
  sortByType
};