import React, { useContext } from 'react';
import Button from '@atoms/Button/Button';
import { ToggleMenuContext } from '@contexts/ToggleMenuProvider';
import { List } from 'react-bootstrap-icons';
import './HamburgerButton.scss';

const HamburgerButton = ({ addClass = '' }) => {
	const [isMenuOpen, toggleMenu] = useContext(ToggleMenuContext);

	return (
		<Button
			addClass={`hamburger-btn button--borderless ${addClass}`}
			handleClick={() => toggleMenu()}
		>
			<List className="hamburger-btn__icon" />
		</Button>
	);
};

export default HamburgerButton;
