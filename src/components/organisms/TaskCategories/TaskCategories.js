import React, { useContext } from 'react';
import { TASK_TYPE, TASK_REDUCER } from '@utils/CONSTANTS';
import useIntresectionObserver from '@hooks/useIntresectionObserver';
import { TasksContext } from '@contexts/TasksProvider';
import TaskList from '@organisms/TaskList/TaskList';
import './TaskCategories.scss';

const TaskCategories = ({ taskListsRefs }) => {
	const {
		[TASK_REDUCER.SET_ACTIVE_CATEGORY]: [activeCat, dispatchActiveCat],
	} = useContext(TasksContext);

	const callback = (entry) => {
		if (entry.intersectionRatio > 0.5) {
			const taskType = entry.target.getAttribute('data-task-type');
			dispatchActiveCat({
				type: TASK_REDUCER.SET_ACTIVE_CATEGORY,
				value: taskType,
			});
		}
	};

	useIntresectionObserver(taskListsRefs.current, callback);

	return (
		<div className="task-categories">
			<TaskList
				taskType={TASK_TYPE.TODO}
				ref={(elem) => (taskListsRefs.current[0] = elem)}
			/>
			<TaskList
				taskType={TASK_TYPE.SCHEDULE}
				ref={(elem) => (taskListsRefs.current[1] = elem)}
			/>
			<TaskList
				taskType={TASK_TYPE.HABIT}
				ref={(elem) => (taskListsRefs.current[2] = elem)}
			/>
		</div>
	);
};

export default TaskCategories;
