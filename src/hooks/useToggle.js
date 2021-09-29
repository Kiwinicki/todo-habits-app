import { useState } from 'react';
import PropTypes from 'prop-types';

const useToggle = (initState) => {
	const [state, setState] = useState(initState);
	const toggle = () => setState((pervState) => !pervState);
	return [state, toggle];
};

useToggle.propTypes = {
	initState: PropTypes.bool.isRequired,
};

export default useToggle;
