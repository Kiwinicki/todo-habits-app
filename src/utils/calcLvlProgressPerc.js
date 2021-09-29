import { LVL } from '@utils/CONSTANTS';

const calcLvlProgressPerc = (exp, lvl) => {
	let perc = null;
	if (lvl > 1) {
		perc = (exp / LVL[lvl - 1].REQUIRED_EXP) * 100;
	} else {
		perc = exp * 100;
	}
	if (perc === 100) perc = 0;
	return perc;
};

export default calcLvlProgressPerc;
