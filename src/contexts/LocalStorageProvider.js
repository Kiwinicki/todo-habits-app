import React, { createContext, useReducer } from 'react';

const reducer = (state, action) => {};

export const LocalStorageContext = createContext(
	'default value from LocalStorageContext'
);
LocalStorageContext.displayName = 'LocalStorageContext';

// zaciąganie danych z localStorage
const initState = {};

export const LocalStorageProvider = ({ children }) => {
	const [localStorageState, dispatch] = useReducer(reducer, initState);

	return (
		<LocalStorageContext.Provider value={[localStorageState, dispatch]}>
			{children}
		</LocalStorageContext.Provider>
	);
};
