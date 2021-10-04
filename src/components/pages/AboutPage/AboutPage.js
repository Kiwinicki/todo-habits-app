import PageTemplate from '@templates/PageTemplate/PageTemplate';
import './AboutPage.scss';

export default function AboutPage() {
	return (
		<PageTemplate
			pageTitle="About app"
			mainContent={
				<>
					<h2 className="about-page__heading">
						Hi, I'm Dawid and this is my first React app.
					</h2>
					<h3 className="about-page__heading">Used technologies: </h3>
					<ul className="about-page__list">
						<li className="about-page__list-item">React:</li>
						<ul className="about-page__list">
							<li className="about-page__list-item">functional components</li>
							<li className="about-page__list-item">react hooks</li>
							<li className="about-page__list-item">contexts</li>
						</ul>
						<li className="about-page__list-item">ES6+</li>
						<li className="about-page__list-item">SASS</li>
					</ul>
					{/* <p>
						This app uses React functional components, react hooks (useState,
						useReducer, useEffect, useContext, useRef and custom hooks e.g.
						useToggle) and contexts.
					</p> */}
				</>
			}
		></PageTemplate>
	);
}
