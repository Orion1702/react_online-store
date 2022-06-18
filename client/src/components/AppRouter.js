import React, { useContext } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { Context } from "..";
import { authRoutes, publickRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)

    // console.log('authRoutes')
    // console.log(authRoutes)
    return(
        <Switch>
            {/* {authRoutes.map(({path, Component}) =>  */}
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}

            {publickRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {/* <Route key='admin' path='/admin' component={Admin} exact/> */}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;