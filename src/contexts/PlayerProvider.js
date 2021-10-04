import React, { createContext, useReducer } from 'react';
import {
	LOCAL_STORAGE_REDUCER,
	PLAYER_REDUCER,
	LVL,
	MAX_HP,
} from '@utils/CONSTANTS';

const playerReducer = (state, action) => {
	const { CHANGE_EXP, CHANGE_HP } = PLAYER_REDUCER;

	switch (action.type) {
		case CHANGE_EXP:
			let newExp = state.exp + action.value;
			let newLvl = state.lvl;
			let newHp = state.hp;
			if (newExp > LVL[state.lvl - 1].REQUIRED_EXP) {
				newLvl++;
				newExp -= state.exp;
				newHp = MAX_HP;
			}
			return {
				...state,
				exp: newExp,
				lvl: newLvl,
				hp: newHp,
			};
		case CHANGE_HP:
			// action.hp usually will be negative to reduce HP
			return state.hp + action.value <= 0
				? { ...state, hp: MAX_HP, lvl: 1, exp: 0 }
				: { ...state, hp: state.hp + action.value };
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

const initPlayerState = {
	name: 'Guest',
	exp: 20,
	lvl: 4,
	hp: 20,
};

export const PlayerContext = createContext([
	'default value from PlayerContext',
]);
PlayerContext.displayName = 'PlayerContext';

export const PlayerProvider = ({ children }) => {
	const [playerState, dispatch] = useReducer(
		playerReducer,
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_REDUCER.PLAYER_DATA)) ||
			initPlayerState
	);

	localStorage.setItem(
		LOCAL_STORAGE_REDUCER.PLAYER_DATA,
		JSON.stringify(playerState)
	);

	return (
		<PlayerContext.Provider value={[playerState, dispatch]}>
			{children}
		</PlayerContext.Provider>
	);
};
