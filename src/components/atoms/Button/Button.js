import { PropTypes } from 'prop-types';
import './Button.scss';

const Button = ({
	children,
	handleClick,
	type = 'button',
	addClass = undefined,
}) => {
	return (
		<button
			className={`button ${addClass ? addClass : ''}`}
			type={type}
			onClick={handleClick && ((ev) => handleClick(ev))}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	content: PropTypes.node,
	handleClick: PropTypes.func,
	type: PropTypes.string,
};

export default Button;
