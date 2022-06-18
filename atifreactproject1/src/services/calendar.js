const getLocalDate = (date) => {
    var date_obj = new Date(date);   
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return `${date_obj.toLocaleDateString('en-US', options)}`;
};

const Calendar = { getLocalDate };
export { Calendar };