const scrollHorizontally = (elem) => {
	document.querySelector('.task-categories').scrollTo({
		top: 0,
		left: elem.offsetLeft,
		behavior: 'smooth',
	});
};

export default scrollHorizontally;
