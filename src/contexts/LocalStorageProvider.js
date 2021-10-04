import React, { createContext, useReducer } from 'react';
import { LOCAL_STORAGE_REDUCER } from '@utils/CONSTANTS';
import getDayOftheYear from '@utils/getDayOfTheYear';

const { LAST_VISIT_DATE, DAYS_STREAK, MAX_DAYS_STREAK, UPDATE_VISIT_DATE } =
	LOCAL_STORAGE_REDUCER;

const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_VISIT_DATE:
			const today = getDayOftheYear(new Date());
			// console.log(today);
			return {
				...state,
				// 	[DAYS_STREAK]:
				// 		state[LAST_VISIT_DATE] + 1 === today ? state[DAYS_STREAK] + 1 : 0,
				// 	[LAST_VISIT_DATE]: today,
				[MAX_DAYS_STREAK]:
					state[DAYS_STREAK] >= state[MAX_DAYS_STREAK] &&
					(state[MAX_DAYS_STREAK] = state[DAYS_STREAK]),
			};
		default:
			break;
	}
};

export const LocalStorageContext = createContext(
	'default value from LocalStorageContext'
);
LocalStorageContext.displayName = 'LocalStorageContext';

const setStreak = () => {
	if (
		JSON.parse(localStorage.getItem(LAST_VISIT_DATE)) + 1 ===
		getDayOftheYear(new Date())
	) {
		return JSON.parse(localStorage.getItem(DAYS_STREAK)) + 1;
	}
	return 0;
};

const initState = {
	[LAST_VISIT_DATE]: getDayOftheYear(new Date()),
	[DAYS_STREAK]: setStreak(),
	[MAX_DAYS_STREAK]: JSON.parse(localStorage.getItem(MAX_DAYS_STREAK)) || 0,
};

export const LocalStorageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	localStorage.setItem(LAST_VISIT_DATE, JSON.stringify(state[LAST_VISIT_DATE]));
	localStorage.setItem(DAYS_STREAK, JSON.stringify(state[DAYS_STREAK]));
	localStorage.setItem(MAX_DAYS_STREAK, JSON.stringify(state[MAX_DAYS_STREAK]));

	return (
		<LocalStorageContext.Provider value={[state, dispatch]}>
			{children}
		</LocalStorageContext.Provider>
	);
};
