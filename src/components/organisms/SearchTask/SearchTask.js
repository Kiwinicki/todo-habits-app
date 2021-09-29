import React, { useContext } from 'react';
import { TasksContext } from '@contexts/TasksProvider';
import { TASK_REDUCER } from '@utils/CONSTANTS';
import { Search, XLg } from 'react-bootstrap-icons';
import useToggle from '@hooks/useToggle';
import Button from '@atoms/Button/Button';
import Input from '@atoms/Input/Input';
import './SearchTask.scss';

const SearchTask = () => {
	const { FILTER_TASK } = TASK_REDUCER;
	const {
		[TASK_REDUCER.FILTER_TASK]: [filter, dispatchFilter],
	} = useContext(TasksContext);

	const [isHidden, toggleHidden] = useToggle(true);

	return (
		<form
			className={`search-task ${isHidden ? 'search-task--hidden' : ''}`}
			onSubmit={(ev) => {
				ev.preventDefault();
			}}
		>
			<Input
				type="text"
				addClass={`input-text--light search-task__input ${
					isHidden ? 'search-task__input--hidden' : ''
				}`}
				value={filter}
				handleChange={(ev) => {
					dispatchFilter({
						type: TASK_REDUCER.FILTER_TASK,
						filter: ev.target.value,
					});
				}}
				placeholder="start searching..."
			/>
			<Button
				addClass={`button--borderless`}
				handleClick={() => {
					toggleHidden();
					if (!isHidden) {
						dispatchFilter({
							type: TASK_REDUCER.FILTER_TASK,
							filter: '',
						});
					}
				}}
			>
				{isHidden ? (
					<Search className="search-task__search-icon" />
				) : (
					<XLg className="search-task__search-icon" />
				)}
			</Button>
		</form>
	);
};

export default SearchTask;
