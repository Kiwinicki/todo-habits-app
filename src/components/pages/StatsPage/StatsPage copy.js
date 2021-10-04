import React, { useContext, useEffect } from 'react';
import {
	COMPLITED_TASKS,
	TASK_TYPE,
	LOCAL_STORAGE_REDUCER,
	LVL,
} from '@utils/CONSTANTS';
import StatsHeader from '@organisms/StatsHeader/StatsHeader';
import PieChart from '@atoms/PieChart/PieChart';
import { TasksContext } from '@contexts/TasksProvider';
import { LocalStorageContext } from '@contexts//LocalStorageProvider';
import { PlayerContext } from '@contexts//PlayerProvider';
import './StatsPage.scss';

const { SUCCESS, FAIL } = COMPLITED_TASKS;
const { TODO, SCHEDULE, HABIT } = TASK_TYPE;

function StatsPage() {
	const {
		[LOCAL_STORAGE_REDUCER.SET_COMPLITED_TASKS]: [
			complitedTasks,
			dispatchComplitedTasks,
		],
		[TODO]: [todosState, dispatchTodos],
		[SCHEDULE]: [schedulesState, dispatchSchedules],
		[HABIT]: [habitsState, dispatchHabits],
	} = useContext(TasksContext);
	const [playerState, dispatchPlayer] = useContext(PlayerContext);
	const [LCState, dispatchLC] = useContext(LocalStorageContext);

	const sum = complitedTasks[FAIL] + complitedTasks[SUCCESS];
	const failPerc = (complitedTasks[FAIL] / sum) * 100;
	const successPerc = (complitedTasks[SUCCESS] / sum) * 100;

	let allEarnedExp = 0;
	for (const el of LVL) {
		allEarnedExp += el.REQUIRED_EXP;
	}
	allEarnedExp += playerState.exp;

	return (
		<>
			<StatsHeader />
			<main className="stats-main">
				<h2 className="stats-main__header">PLAYER</h2>
				<p>Current level: {playerState.lvl}</p>
				<p>Current exp points: {playerState.exp}</p>
				<p></p>
				<p>All time exp points: {allEarnedExp}</p>
				<h2 className="stats-main__header">TASKS</h2>
				{sum !== 0 ? (
					<>
						<PieChart
							addClass="stats-main__pie-chart"
							chartSlices={[
								{ color: 'green', perc: successPerc },
								{ color: 'red', perc: failPerc },
							]}
						/>
						<p className="stats-main__label">
							<span className="stats-main__legend stats-main__legend--red"></span>
							failed tasks ({failPerc.toFixed()}%) /
							<span className="stats-main__legend stats-main__legend--green"></span>
							successful tasks ({successPerc.toFixed()}%)
						</p>
					</>
				) : (
					<p>No tasks complited. Complite some tasks to see statistic</p>
				)}

				<h3>currently active tasks: </h3>
				<p>TODO's: {todosState.length} tasks</p>
				<p>Schedules: {schedulesState.length} tasks</p>
				<p>Habits: {habitsState.length} tasks</p>

				<h2 className="stats-main__header">DAYS STREAK</h2>
				<p>
					current days streak: {LCState[LOCAL_STORAGE_REDUCER.DAYS_STREAK]} days
				</p>
				<p>
					longest days streak: {LCState[LOCAL_STORAGE_REDUCER.MAX_DAYS_STREAK]}{' '}
					days
				</p>
			</main>
		</>
	);
}

export default StatsPage;
