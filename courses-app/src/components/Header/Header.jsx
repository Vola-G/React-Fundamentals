import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect, useDispatch } from "react-redux";

import { logOut } from "store/user/actionCreators";

import { UserBar } from "components/Header/UserBar/UserBar";
import { GuestBar } from "components/Header/GuestBar/GuestBar";

import SchoolIcon from '@material-ui/icons/School';
import "./Header.css";
import { useEffect } from "react";

function Header(user) {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logOut())
        console.log("LOGOUT")
    }

    // useEffect(()=> {}, [user])

    return (
        <div className={"header"}>
            <nav className={"navbar"}>
                <div className={"navbar-left"}>
                    <Link to={"/courses"}>
                        <SchoolIcon color="primary" style={{ fontSize: 30 }}/>
                    </Link>
                    <Link to={"/courses"} className={"navbar-title_link"}>
                        <h3 className={"navbar-title"}>Courses-App</h3>
                    </Link>
                </div>
                <div className={"navbar-right"}>
                    { (user && user.isAuth) ? <UserBar user={user.name ? user.name : user.email} onClick={onLogout}/> : <GuestBar/> }
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
