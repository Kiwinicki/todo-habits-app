import React, { useState } from 'react';
import { TASK_DIFFICULTY } from '@utils/CONSTANTS';
import Button from '@atoms/Button/Button';
import FormField from '@molecules/FormField/FormField';
import './TaskForm.scss';

const TaskForm = ({ addClass, formToggler, handleSubmit, handleReset }) => {
	const validation = { required: true };

	const [isFormOpen, toggleForm] = formToggler;

	const initialFormState = {
		title: '',
		difficulty: null,
		id: null,
	};

	const [formState, setFormState] = useState(initialFormState);

	const difficultyLvls = Object.values(TASK_DIFFICULTY);

	return (
		<form
			className={`task-form ${!isFormOpen ? 'task-form--hidden' : ''} ${
				addClass ? addClass : ''
			}`}
			onSubmit={(ev) => {
				ev.preventDefault();
				handleSubmit(formState);
				setFormState(initialFormState);
				toggleForm();
			}}
			onReset={() => {
				setFormState(initialFormState);
				handleReset !== undefined && handleReset();
				toggleForm();
			}}
		>
			<FormField
				type="text"
				name="title"
				handleChange={(ev) => {
					setFormState((pervState) => {
						return { ...pervState, title: ev.target.value };
					});
				}}
				value={formState.title}
				validation={validation}
				labelClass="task-form__title"
			>
				Title:
			</FormField>
			<p>Difficulty: </p>
			<div className="task-form__inner">
				{difficultyLvls.map((difficultyLvl, index) => (
					<FormField
						type="radio"
						value={difficultyLvl}
						name="difficulty"
						handleChange={(ev) => {
							setFormState((pervState) => {
								return { ...pervState, difficulty: parseInt(ev.target.value) };
							});
						}}
						validation={validation}
						inputClass="input--as-btn"
						labelClass={`label--as-btn ${
							formState.difficulty == difficultyLvl
								? 'label--as-btn--checked'
								: ''
						}`}
						key={index}
					>
						{['Easy', 'Medium', 'Hard'][index]}
					</FormField>
				))}
				<Button type="submit" addClass={'button__submit'}>
					Submit
				</Button>
				<Button type="reset" addClass={'button__reset'}>
					Cancel
				</Button>
			</div>
		</form>
	);
};

export default TaskForm;
