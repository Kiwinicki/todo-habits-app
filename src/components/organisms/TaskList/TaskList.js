import React, { forwardRef, useContext, useEffect } from 'react';
import filterTaskArr from '@utils/filterTaskArr';
import { TasksContext } from '@contexts/TasksProvider';
import Task from '@organisms/Task/Task';
import './TaskList.scss';

const TaskList = forwardRef(({ taskType }, ref) => {
	const {
		[taskType]: [tasks, dispatchTask],
		filter: [filter, dispatchFilter],
	} = useContext(TasksContext);

	let tasksToShow = filterTaskArr(filter, tasks);

	return (
		<div className="task-list" data-task-type={taskType} ref={ref}>
			{tasksToShow ? (
				tasksToShow.map((task) => (
					<Task
						taskType={taskType}
						task={task}
						key={task.id}
						dispatchTask={(type, action) => {
							console.log(type, action, tasks);
							dispatchTask(type, action);
							localStorage.setItem(taskType, JSON.stringify(tasks));
							console.log(type, action, tasks);
						}}
					/>
				))
			) : (
				<p className="task-list__no-tasks">No tasks</p>
			)}
		</div>
	);
});

export default TaskList;
