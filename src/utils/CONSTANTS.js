module.exports = Object.freeze({
	MAX_HP: 50,
	LVL: [
		{ REQUIRED_EXP: 5 },
		{ REQUIRED_EXP: 15 },
		{ REQUIRED_EXP: 30 },
		{ REQUIRED_EXP: 55 },
		{ REQUIRED_EXP: 75 },
		{ REQUIRED_EXP: 95 },
		{ REQUIRED_EXP: 125 },
		{ REQUIRED_EXP: 145 },
		{ REQUIRED_EXP: 170 },
		{ REQUIRED_EXP: 200 },
		{ REQUIRED_EXP: 245 },
	],
	TASK_DIFFICULTY: {
		EASY: 1,
		MEDIUM: 2,
		HARD: 3,
	},
	TASK_TYPE: {
		TODO: 'todo',
		SCHEDULE: 'schedule',
		HABIT: 'habit',
	},
	PLAYER_REDUCER: {
		CHANGE_EXP: 'exp',
		CHANGE_HP: 'hp',
	},
	TASK_REDUCER: {
		ADD_TASK: 'add',
		REMOVE_TASK: 'remove',
		FILTER_TASK: 'filter',
		EDIT_TASK: 'edit',
		SET_ACTIVE_CATEGORY: 'activeCat',
		SET_COMPLITED_TASKS: 'complitedTasks',
	},
	COMPLITED_TASKS: {
		SUCCESS: 'success',
		FAIL: 'fail',
	},
});
