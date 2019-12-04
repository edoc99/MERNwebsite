import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

import AuthPage from '../pages/AuthPage';

const RouteViews = ({auth}) => (
<main>
    <Switch>
        <Route exact path="/login" render={() => (<AuthPage authType="login" isauthenticated={auth.isauthenticated} />)} />
        <Route exact path="/register" render={() => (<AuthPage authType="register" isauthenticated={auth.isauthenticated} />)} />
    </Switch>
</main>);

export default withRouter(connect(store => ({ auth: store.auth }))(RouteViews));