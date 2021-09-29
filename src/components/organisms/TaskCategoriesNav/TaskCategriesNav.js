import { useContext } from 'react';
import { TASK_TYPE, TASK_REDUCER } from '@utils/CONSTANTS';
import { CheckAll, CalendarWeek, ClipboardData } from 'react-bootstrap-icons';
import scrollHorizontally from '@utils/scrollHorizontally';
import { TasksContext } from '@contexts/TasksProvider';
import './TaskCategoriesNav.scss';
import Button from '@components/atoms/Button/Button';

const TaskCategoriesNav = ({ taskListsRefs }) => {
	const {
		[TASK_REDUCER.SET_ACTIVE_CATEGORY]: [activeCat, dispatchActiveCat],
	} = useContext(TasksContext);

	const setActiveCatClass = (taskType) =>
		`categories-nav__btn ${
			taskType === activeCat ? 'categories-nav__btn--active' : ''
		}`;

	return (
		<div className="categories-nav">
			<Button
				addClass={setActiveCatClass(TASK_TYPE.TODO)}
				handleClick={() => scrollHorizontally(taskListsRefs.current[0])}
			>
				<CheckAll className="categories-nav__icon" />
				<p className="categories-nav__name">To do's</p>
			</Button>
			<Button
				addClass={setActiveCatClass(TASK_TYPE.SCHEDULE)}
				handleClick={() => scrollHorizontally(taskListsRefs.current[1])}
			>
				{/* <ArrowRepeat /> or <BarChartLine /> */}
				<CalendarWeek className="categories-nav__icon" />
				<p className="categories-nav__name">Schedules</p>
			</Button>
			<Button
				addClass={setActiveCatClass(TASK_TYPE.HABIT)}
				handleClick={() => scrollHorizontally(taskListsRefs.current[2])}
			>
				<ClipboardData className="categories-nav__icon" />
				<p className="categories-nav__name">Habits</p>
			</Button>
		</div>
	);
};

export default TaskCategoriesNav;
