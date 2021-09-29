import React from 'react';
import './Input.scss';

const Input = ({
	type = 'text',
	value,
	addClass,
	placeholder = null,
	name = null,
	handleChange,
	validation,
}) => {
	const attrs = {
		type: type,
		name: name,
		value: value,
		...(placeholder && { placeholder: placeholder }),
		...(handleChange && { onChange: (ev) => handleChange(ev) }),
		className: `input-${type} ${addClass ? addClass : ''}`,
	};

	return <input {...attrs} {...validation} />;
};

export default Input;
