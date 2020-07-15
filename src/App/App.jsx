import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

// Pages init
import DistGrid from './Customer';
import Login from './Admin/Login';
import CustLogin from './Customer/Login';
import AdminDrawer from './Admin';
import StaffGrid from './Staff';
import ManagerGrid from './Manager';
import Register from './Customer/RegisterS/UserForm';
import SupAdminDrawer from './SuperAdmin';
import MiniDrawer from './SuperAdmin/drawer.js';
import AccessDist from './Customer/AccessDistributor';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ScopedCssBaseline>
					<Router>
						<Switch>
							{/* JUST ADD Additional Routes here */}
							<Route exact path="/" component={Login} />
							<Route path="/Admin" component={AdminDrawer} />
							<Route path="/SuperAdmin" component={SupAdminDrawer} />
							<Route path="/Login" component={CustLogin} />
							<Route path="/Register" component={Register} />
							<Route path="/AccessDistributor" component={AccessDist} />
							<Route path="/Customer" component={DistGrid} />
							<Route path="/Drawer" render={() => <MiniDrawer />} />
							<Route path="/Staff" component={StaffGrid} />
							<Route path="/Manager" component={ManagerGrid} />
						</Switch>
					</Router>
				</ScopedCssBaseline>
			</div>
		);
	}
}
export default App;
