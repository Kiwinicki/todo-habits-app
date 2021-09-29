const filterTaskArr = (filter, tasks) => {
	if (filter !== '') {
		const filteredTask = tasks.filter((task) =>
			task.title.indexOf(filter) !== -1 ? true : false
		);
		return filteredTask.length > 0 ? filteredTask : null;
	} else {
		return tasks.length > 0 ? tasks : null;
	}
};

export default filterTaskArr;
