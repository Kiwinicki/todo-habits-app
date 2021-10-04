import React from 'react';
import './PageMain.scss';

const PageMain = ({ children, addClass = '' }) => {
	return <main className={`page-main ${addClass}`}>{children}</main>;
};

export default PageMain;
