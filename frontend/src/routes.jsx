import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import User from "./pages/User";

const routes = [
    {
        path: "/todo",
        component: Todo,
        name: "Todo",
        exact: true
    },
    {
        path: "/home",
        component: Home,
        name: "Home",
        exact: true
    },
    {
        path: "/signin",
        component: Signin,
        name: "Signin",
        exact: true
    },
    {
        path: "/signup",
        component: Signup,
        name: "Signup",
        exact: true
    },
    {
        path: "/user",
        component: User,
        name: "User",
        exact: true
    }
];

const Routes = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route path={route.path} exact={route.exact} component={route.component} />
                ))}
            </Switch>
        </Router>
    );
}

export default Routes;