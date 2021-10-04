import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToggleMenuContext } from '@contexts/ToggleMenuProvider';
import Button from '@atoms/Button/Button';
import { XLg } from 'react-bootstrap-icons';
import './SideMenu.scss';

const SideMenu = () => {
	const [isMenuOpen, toggleMenu] = useContext(ToggleMenuContext);

	return (
		<div className={`side-menu ${isMenuOpen ? 'side-menu--open' : ''}`}>
			<div
				className={`side-menu__bg ${isMenuOpen ? 'side-menu__bg--open' : ''}`}
			></div>
			<nav
				className={`side-menu__app-menu ${
					isMenuOpen ? 'side-menu__app-menu--open' : ''
				}`}
			>
				<Button
					handleClick={() => toggleMenu()}
					addClass="button--borderless side-menu__close-menu-btn"
				>
					<XLg className="side-menu__close-icon" />
				</Button>
				<ul className="side-menu__list">
					<li className="side-menu__item" onClick={() => toggleMenu()}>
						<Link to="/" className="side-menu__link">
							Home
						</Link>
					</li>
					<li className="side-menu__item" onClick={() => toggleMenu()}>
						<Link to="/stats" className="side-menu__link">
							Statistic
						</Link>
					</li>
					{/* <li className="side-menu__item" onClick={() => toggleMenu()}>
						<Link to="/rewards" className="side-menu__link">
							Rewards
						</Link>
					</li>
					<li className="side-menu__item" onClick={() => toggleMenu()}>
						<Link to="/settings" className="side-menu__link">
							Settings
						</Link>
					</li> */}
					<li className="side-menu__item" onClick={() => toggleMenu()}>
						<Link to="/about" className="side-menu__link">
							About author
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideMenu;
