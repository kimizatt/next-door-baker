import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import BakerDashboard from './components/bakerDashboard/BakerDashboard'
// import BakerDashboard from './components/bakerDashbard/BakerDashboard'
// import Orders from './components/orders/Orders'
import BakerProducts from './components/bakerDashboard/BakerProducts';
import Profile from './components/bakerDashboard/Profile'

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/baker_tabs" component={BakerDashboard} />
        <Route path='/baker_products' component={BakerProducts} />
        <Route path='/profile' component={Profile} />
        {/* <Route path="/baker_dash" component={BakerDashboard} /> */}
        {/* <Route path="/order_dashboard" component={Orders} /> */}
        {/* <Route path="/:baker_dash_products" components={BakerProducts} /> */}
    </Switch>
)