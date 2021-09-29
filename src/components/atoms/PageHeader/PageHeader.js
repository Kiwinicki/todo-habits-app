import React from 'react';
import './PageHeader.scss';

const PageHeader = ({ children, addClass = '' }) => {
	return <header className={`page-header ${addClass}`}>{children}</header>;
};

export default PageHeader;
