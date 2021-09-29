import React, { useContext } from 'react';
import {
	PlusLg,
	CheckLg,
	XLg,
	StarFill,
	DashLg,
	PencilFill,
	TrashFill,
} from 'react-bootstrap-icons';
import {
	TASK_TYPE,
	PLAYER_REDUCER,
	TASK_REDUCER,
	COMPLITED_TASKS,
} from '@utils/CONSTANTS';
import { PlayerContext } from '@contexts/PlayerProvider';
import { TasksContext } from '@contexts/TasksProvider';
import useToggle from '@hooks/useToggle';
import Button from '@atoms/Button/Button';
import TaskForm from '@organisms/TaskForm/TaskForm';
import './Task.scss';

const Task = ({ taskType, task, dispatchTask }) => {
	const { TODO, SCHEDULE } = TASK_TYPE;
	const { FAIL, SUCCESS } = COMPLITED_TASKS;
	const { id, title, difficulty } = task;

	const [playerState, dispatchPlayer] = useContext(PlayerContext);
	const {
		[TASK_REDUCER.SET_COMPLITED_TASKS]: [
			complitedTasks,
			dispatchComplitedTasks,
		],
	} = useContext(TasksContext);

	const [isFormOpen, toggleForm] = useToggle(false);
	const [isOptionsBarOpen, toggleOptionsBar] = useToggle(false);

	let difficultyIndex = [];
	for (let i = 0; i < difficulty; i++) {
		difficultyIndex.push(<StarFill key={i} />);
	}

	const increaseEXP = () => {
		dispatchPlayer({
			type: PLAYER_REDUCER.CHANGE_EXP,
			value: difficulty,
		});
	};

	const reduceHP = () => {
		dispatchPlayer({
			type: PLAYER_REDUCER.CHANGE_HP,
			value: -difficulty,
		});
	};

	const removeTask = () => {
		dispatchTask({ type: TASK_REDUCER.REMOVE_TASK, value: task });
	};

	return (
		<div className={`task task--${taskType}`}>
			<Button
				addClass="task__btn task__btn--left"
				handleClick={() => {
					increaseEXP();
					dispatchComplitedTasks({
						type: TASK_REDUCER.SET_COMPLITED_TASKS,
						value: SUCCESS,
					});
					if (taskType === TODO) {
						removeTask(id);
					}
				}}
			>
				{taskType === TODO || SCHEDULE ? (
					<CheckLg className="task__icon" />
				) : (
					<PlusLg className="task__icon" />
				)}
			</Button>
			<div className="task__info">
				<div onClick={() => toggleOptionsBar()}>
					<h3 className="task__title">{title}</h3>
					<div className="task__difficulty">{difficultyIndex}</div>
				</div>
				<div
					className={`task__options-bar ${
						isOptionsBarOpen ? 'task__options-bar--expanded' : ''
					}`}
				>
					<Button
						handleClick={() => removeTask()}
						addClass="task-form__options-btn"
					>
						<TrashFill />
					</Button>
					<Button
						handleClick={() => toggleForm()}
						addClass="task-form__options-btn"
					>
						<PencilFill />
					</Button>
				</div>
				<TaskForm
					formToggler={[isFormOpen, toggleForm]}
					addClass="task-form--light task-form--column"
					handleSubmit={(task) => {
						if (task.title !== '' && task.difficulty !== null) {
							dispatchTask({
								type: TASK_REDUCER.EDIT_TASK,
								value: { ...task, id: id },
							});
						}
					}}
					handleReset={toggleOptionsBar}
				/>
			</div>

			{taskType !== TODO && (
				<Button
					addClass="task__btn task__btn--right"
					handleClick={() => {
						reduceHP();
						dispatchComplitedTasks({
							type: TASK_REDUCER.SET_COMPLITED_TASKS,
							value: FAIL,
						});
					}}
				>
					{taskType === SCHEDULE ? (
						<XLg className="task__icon" />
					) : (
						<DashLg className="task__icon" />
					)}
				</Button>
			)}
		</div>
	);
};

export default Task;
