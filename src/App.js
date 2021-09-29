import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import StatsPage from '@pages/StatsPage/StatsPage';
import RewardsPage from '@pages/RewardsPage/RewardsPage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';
import AboutPage from '@pages/AboutPage/AboutPage';
import SideMenu from '@organisms/SideMenu/SideMenu';
import { PlayerProvider } from '@contexts/PlayerProvider';
import { TasksProvider } from '@contexts/TasksProvider';
import { ToggleMenuProvider } from '@contexts/ToggleMenuProvider';

const App = () => {
	return (
		<PlayerProvider>
			<TasksProvider>
				<ToggleMenuProvider>
					<Router>
						<SideMenu />
						<Switch>
							<Route exact path="/">
								<HomePage />
							</Route>
							<Route path="/stats">
								<StatsPage />
							</Route>
							<Route path="/rewards">
								<RewardsPage />
							</Route>
							<Route path="/settings">
								<SettingsPage />
							</Route>
							<Route path="/about">
								<AboutPage />
							</Route>
						</Switch>
					</Router>
				</ToggleMenuProvider>
			</TasksProvider>
		</PlayerProvider>
	);
};

export default App;
