import React, { useContext } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { authRoutes, publickRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return(
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

            {publickRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;