import { useEffect } from 'react';
import PropTypes from 'prop-types';

const defaultOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5,
};

const useIntresectionObserver = (
	refsArr,
	callback,
	options = defaultOptions
) => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(callback);
		}, options);

		refsArr.forEach((ref) => {
			observer.observe(ref);
		});
	}, []);
};

useIntresectionObserver.propTypes = {
	refArr: PropTypes.arrayOf(PropTypes.string).isRequired,
	callback: PropTypes.func.isRequired,
	options: PropTypes.object,
};

export default useIntresectionObserver;
