import PageHeader from '@atoms/PageHeader/PageHeader';
import HamburgerButton from '@molecules/HamburgerButton/HamburgerButton';
import './AboutHeader.scss';

const AboutHeader = () => {
	return (
		<PageHeader addClass="about-header">
			<HamburgerButton addClass="about-header__menu-btn" />
			<h1 className="about-header__page-title">About author</h1>
		</PageHeader>
	);
};

export default AboutHeader;
