import { createContext, useState } from 'react';

const initState = false;

export const ToggleMenuContext = createContext(
	'default value from MenuToggleContext'
);
ToggleMenuContext.displayName = 'ToggleMenuContext';

export const ToggleMenuProvider = ({ children }) => {
	const [isMenuOpen, setMenuToggle] = useState(initState);
	const toggleMenu = () => setMenuToggle((pervState) => !pervState);

	return (
		<ToggleMenuContext.Provider value={[isMenuOpen, toggleMenu]}>
			{children}
		</ToggleMenuContext.Provider>
	);
};
