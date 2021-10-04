const getDayOftheYear = (date) => {
	if (typeof date == 'string') console.log(date);
	const start = new Date(date.getFullYear(), 0, 0);
	var diff =
		date -
		start +
		(start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.floor(diff / oneDay);
	return day;
};

export default getDayOftheYear;
