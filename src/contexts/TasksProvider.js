import React, { createContext, useReducer, useState } from 'react';
import {
	TASK_REDUCER,
	TASK_DIFFICULTY,
	TASK_TYPE,
	COMPLITED_TASKS,
} from '@utils/CONSTANTS';

const {
	ADD_TASK,
	REMOVE_TASK,
	EDIT_TASK,
	SET_ACTIVE_CATEGORY,
	FILTER_TASK,
	SET_COMPLITED_TASKS,
} = TASK_REDUCER;
const { TODO, HABIT, SCHEDULE } = TASK_TYPE;
const { SUCCESS, FAIL } = COMPLITED_TASKS;

const taskReducer = (state, action) => {
	console.log('state ', state, ' action: ', action);
	switch (action.type) {
		case ADD_TASK:
			const newTask = action.value;
			state.length > 0
				? (newTask.id = state[state.length - 1].id + 1)
				: (newTask.id = 1);
			localStorage.setItem(
				SET_ACTIVE_CATEGORY[0],
				JSON.stringify([...state, newTask])
			);
			return [...state, newTask];
		case REMOVE_TASK:
			const filteredState = state.filter((task) => task.id !== action.value.id);
			// localStorage.setItem(taskType, JSON.stringify(filteredState));
			return filteredState;
		case FILTER_TASK:
			return action.filter;
		case EDIT_TASK:
			const index = state.findIndex((task) => task.id === action.value.id);
			const editedState = [...state];
			editedState[index] = action.value;
			// localStorage.setItem(taskType, JSON.stringify(editedState));
			return editedState;
		case SET_ACTIVE_CATEGORY:
			if (Object.values(TASK_TYPE).includes(action.value)) return action.value;
			else throw new Error(`Unhandled task type ${action.value}`);
		case SET_COMPLITED_TASKS:
			const newComplitedTasks = {
				...state,
				[action.value]: state[action.value] + 1,
			};
			localStorage.setItem(
				SET_COMPLITED_TASKS,
				JSON.stringify(newComplitedTasks)
			);
			return newComplitedTasks;
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

// const exampleTask = {
// 	title: "It's example todo task. You can remove it but not yet",
// 	difficulty: TASK_DIFFICULTY.EASY,
// 	id: 0,
// };

export const TasksContext = createContext(['default value from TaskContext']);
TasksContext.displayName = 'TasksContext';

export const TasksProvider = ({ children }) => {
	const [todos, dispatchTodos] = useReducer(
		taskReducer,
		JSON.parse(localStorage.getItem(TODO)) || []
	);
	const [schedules, dispatchSchedules] = useReducer(
		taskReducer,
		JSON.parse(localStorage.getItem(SCHEDULE)) || []
	);
	const [habits, dispatchHabits] = useReducer(
		taskReducer,
		JSON.parse(localStorage.getItem(HABIT)) || []
	);
	const [filter, dispatchFilter] = useReducer(taskReducer, '');
	const [activeCategory, dispatchCategory] = useReducer(taskReducer, TODO);
	const [complitedTasks, dispatchComplitedTasks] = useReducer(
		taskReducer,
		JSON.parse(localStorage.getItem(SET_COMPLITED_TASKS)) || {
			[SUCCESS]: 0,
			[FAIL]: 0,
		}
	);

	return (
		<TasksContext.Provider
			value={{
				[TODO]: [todos, dispatchTodos],
				[SCHEDULE]: [schedules, dispatchSchedules],
				[HABIT]: [habits, dispatchHabits],
				[FILTER_TASK]: [filter, dispatchFilter],
				[SET_ACTIVE_CATEGORY]: [activeCategory, dispatchCategory],
				[SET_COMPLITED_TASKS]: [complitedTasks, dispatchComplitedTasks],
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};
