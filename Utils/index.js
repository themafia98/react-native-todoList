import moment from 'moment';


const getClassNameByType = (date, today) => {

  if (date.isSame(today)) return "current";
  else if (date.isAfter(today)) return "future";
  else if (date.isBefore(today)) return "past";

  return "all";
};

const sortByType = (type, items) => {
  const today = moment(moment().format("DD.MM.YYYY"), 'DD.MM.YYYY');

  const parsedItems = items.reduce((acc, item) => {
    if (!item) return acc;
    
    const { date = "" } = item;

    return [
      ...acc,
      { ...item, className: getClassNameByType(moment(date, "DD.MM.YYYY"), today) }
    ]
  }, []);

  return parsedItems.filter(item => {
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