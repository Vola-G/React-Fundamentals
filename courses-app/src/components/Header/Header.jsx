import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect, useDispatch } from "react-redux";

import { logOut } from "store/user/actionCreators";

import Button from "components/Button/Button";
import SchoolIcon from '@material-ui/icons/School';

import "./Header.css";

function Header(user) {
    const dispatch = useDispatch();

    const handleClick = () => {
        user?.isAuth ? dispatch(logOut()) : null;
    }

    return (
        <div className={"header"}>
            <nav className={"navbar"}>
                <div className={"navbar-left"}>
                    <Link to={"/courses"}>
                        <SchoolIcon color="primary" style={{ fontSize: 30 }} data-testid="header-logo"/>
                    </Link>
                    <Link to={"/courses"} className={"navbar-title_link"}>
                        <h3 className={"navbar-title"}>Courses-App</h3>
                    </Link>
                </div>
                <div className={"navbar-right"}>
                    <h4 data-testid="header-user">{user?.isAuth ? user.name ? user.name : user.email : "Guest"}</h4>
                    <Link to={"/login"}>
                        <div data-testid="header-button">
                            <Button 
                                    name={user?.isAuth ? "Logout" : "Login"} 
                                    variant="contained" 
                                    color="primary" 
                                    style={"navbar-btn"} 
                                    onClick={handleClick}
                                    />
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
        isAuth: PropTypes.bool,
        name: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,
    }),
    logOut: PropTypes.func
}

function mapStateToProps(state) {
    const user = state.userReducer
    return user
}


export default connect(mapStateToProps)(Header)
