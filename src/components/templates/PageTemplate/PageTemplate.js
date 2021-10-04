import PageHeader from '@atoms/PageHeader/PageHeader';
import HamburgerButton from '@molecules/HamburgerButton/HamburgerButton';
import PageMain from '@atoms/PageMain/PageMain';
import './PageTemplate.scss';

const PageTemplate = ({
	mainContent,
	pageTitle,
	addMainClass = '',
	addHeaderClass = '',
}) => {
	return (
		<>
			<PageHeader addClass={`template-header ${addHeaderClass}`}>
				<HamburgerButton addClass="template-header__menu-btn" />
				<h1 className="template-header__page-title">{pageTitle}</h1>
			</PageHeader>
			<PageMain addClass={`template-content ${addMainClass}`}>
				{mainContent}
			</PageMain>
		</>
	);
};

export default PageTemplate;
