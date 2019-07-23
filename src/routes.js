import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import BakerDashboard from './components/bakerDashboard/BakerDashboard'
import Orders from './components/orders/Orders'


export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/:baker_dash" component={BakerDashboard} />
        <Route path="/:order_dash" component={Orders} />
        {/* <Route path="/:baker_dash_products" components={BakerProducts} /> */}
    </Switch>
)