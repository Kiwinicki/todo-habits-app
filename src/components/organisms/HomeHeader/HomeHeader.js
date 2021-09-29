import React, { useContext } from 'react';
import { List, PlusLg } from 'react-bootstrap-icons';
import { PlayerContext } from '@contexts/PlayerProvider';
import { TasksContext } from '@contexts/TasksProvider';
import Button from '@atoms/Button/Button';
import HamburgerButton from '@molecules/HamburgerButton/HamburgerButton';
import PageHeader from '@atoms/PageHeader/PageHeader';
import ProgressRing from '@atoms/ProgressRing/ProgressRing';
import ProgressBar from '@atoms/ProgressBar/ProgressBar';
import calcLvlProgressPerc from '@utils/calcLvlProgressPerc';
import { MAX_HP, LVL, TASK_REDUCER } from '@utils/CONSTANTS';
import TaskForm from '@organisms/TaskForm/TaskForm';
import useToggle from '@hooks/useToggle';
import './HomeHeader.scss';

const HomeHeader = () => {
	const [playerState] = useContext(PlayerContext);
	const { name, exp, lvl, hp } = playerState;
	const { SET_ACTIVE_CATEGORY, ADD_TASK } = TASK_REDUCER;

	const {
		[SET_ACTIVE_CATEGORY]: [activeCategory, dispatchCategory],
	} = useContext(TasksContext);

	const {
		[activeCategory]: [tasks, dispatchTask],
	} = useContext(TasksContext);

	const [isFormOpen, toggleForm] = useToggle(false);

	const lvlProgressPrec = calcLvlProgressPerc(exp, lvl);

	const handleSubmit = ({ title, difficulty }) => {
		dispatchTask({
			type: ADD_TASK,
			value: {
				title: title,
				difficulty: difficulty,
				id: null,
			},
		});
	};

	return (
		<PageHeader addClass="home-header">
			<HamburgerButton addClass="home-header__menu-btn" />
			<h1 className="home-header__player-name">{name}</h1>
			<div className="home-header__lvl-progress">
				<ProgressRing radius={32} stroke={8} progressPerc={lvlProgressPrec}>
					{lvl}
				</ProgressRing>
				<p className="home-header__label">{`${exp}/${
					LVL[lvl - 1].REQUIRED_EXP
				} EXP`}</p>
			</div>
			<div className="home-header__hp-bar">
				<ProgressBar percent={(hp / MAX_HP) * 100} />
				<p className="home-header__label">{`${hp}/${MAX_HP} HP`}</p>
			</div>
			<Button
				handleClick={() => toggleForm()}
				addClass={`button--borderless home-header__add-task-btn ${
					isFormOpen ? 'home-header__add-task-btn--hidden' : ''
				}`}
			>
				<PlusLg className="home-header__plus-icon" />
			</Button>

			<TaskForm
				formToggler={[isFormOpen, toggleForm]}
				addClass="home-header__form"
				handleSubmit={handleSubmit}
			/>
		</PageHeader>
	);
};

export default HomeHeader;
