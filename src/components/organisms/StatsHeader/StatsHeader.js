import PageHeader from '@atoms/PageHeader/PageHeader';
import HamburgerButton from '@molecules/HamburgerButton/HamburgerButton';
import './StatsHeader.scss';

const StatsHeader = () => {
	return (
		<PageHeader addClass="stats-header">
			<HamburgerButton addClass="stats-header__menu-btn" />
			<h1 className="stats-header__page-title">Stats</h1>
		</PageHeader>
	);
};

export default StatsHeader;
