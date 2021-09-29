import React, { useContext } from 'react';
import { COMPLITED_TASKS, TASK_TYPE, TASK_REDUCER } from '@utils/CONSTANTS';
import StatsHeader from '@organisms/StatsHeader/StatsHeader';
import PieChart from '@atoms/PieChart/PieChart';
import { TasksContext } from '@contexts/TasksProvider';

const { SUCCESS, FAIL } = COMPLITED_TASKS;
const { TODO, SCHEDULE, HABIT } = TASK_TYPE;

function StatsPage() {
	const {
		[TASK_REDUCER.SET_COMPLITED_TASKS]: [
			complitedTasks,
			dispatchComplitedTasks,
		],
		[TODO]: [todosState, dispatchTodos],
		[SCHEDULE]: [schedulesState, dispatchSchedules],
		[HABIT]: [habitsState, dispatchHabits],
	} = useContext(TasksContext);

	const sum = complitedTasks[FAIL] + complitedTasks[SUCCESS];
	const failPerc = (complitedTasks[FAIL] / sum) * 100;
	const successPerc = (complitedTasks[SUCCESS] / sum) * 100;

	return (
		<>
			<StatsHeader />
			<main className="main-content">
				<h2>Player</h2>
				<p>Current level: </p>
				<p>Current exp points: </p>
				<p>All time exp points: </p>
				<h2>Tasks</h2>
				<p>successful/failed completed task</p>
				<PieChart
					chartSlices={[
						{ color: 'green', perc: successPerc },
						{ color: 'red', perc: failPerc },
					]}
				/>
				<p>
					<span className="red-box"></span>failed task /
					<span className="green-box"></span>successful task
				</p>

				<p>currently active tasks</p>
				<p>TODO's: {todosState.length}</p>
				<p>Schedules: {schedulesState.length}</p>
				<p>Habits: {habitsState.length}</p>
			</main>
		</>
	);
}

export default StatsPage;
