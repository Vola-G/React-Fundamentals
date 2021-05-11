import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest}) => {
    const user = window.localStorage.getItem('currentUser');
    return (
        <Route
            {...rest}
            render={props =>
                JSON.parse(user).email === "admin@email.com" ? (
                    <Component {...props}/> 
                ) : (
                    <Redirect to="/login"/>
                )
            }

        />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func
}
