import React from 'react';
import './App.scss';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';

function App() {
  return (
		<Switch>
			<Route exact={true} path='/' component={Home} />
			<Route path='/work' component={Work} />
			<Route path='/workdetails/:id' component={WorkDetail} />
		</Switch>
	);
}

export default App;
