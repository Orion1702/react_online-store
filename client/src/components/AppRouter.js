import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { authRoutes, publickRoutes } from "../routes";
import { NOTFOUND_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const isAuth = true;
    return(
        <Switch>
            {isAuth &&  authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publickRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={NOTFOUND_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;