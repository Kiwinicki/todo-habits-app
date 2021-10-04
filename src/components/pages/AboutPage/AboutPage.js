import PageTemplate from '@templates/PageTemplate/PageTemplate';

export default function AboutPage() {
	return (
		<PageTemplate
			pageTitle="About author"
			mainContent={
				<>
					<p>jestem Dawid</p>
				</>
			}
		></PageTemplate>
	);
}
