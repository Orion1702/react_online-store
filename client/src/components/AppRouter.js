import React, { useContext } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { Context } from "..";
import { authRoutes, publickRoutes } from "../routes";
import { NOTFOUND_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return(
        <Switch>
            {user.isAuth &&  authRoutes.map(({path, Component}) => 
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