import React, { useRef } from 'react';
import HomeHeader from '@organisms/HomeHeader/HomeHeader';
import SearchTask from '@organisms/SearchTask/SearchTask';
import TaskCategories from '@organisms/TaskCategories/TaskCategories';
import TaskCategoriesNav from '@organisms/TaskCategoriesNav/TaskCategriesNav';

function HomePage() {
	const taskListsRefs = useRef([]);

	return (
		<>
			<HomeHeader />
			<SearchTask />
			<TaskCategories taskListsRefs={taskListsRefs} />
			<TaskCategoriesNav taskListsRefs={taskListsRefs} />
		</>
	);
}

export default HomePage;
