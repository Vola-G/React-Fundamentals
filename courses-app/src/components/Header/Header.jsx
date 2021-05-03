import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Login } from "pages/Login/Login";
import { UserBar } from "components/Header/UserBar/UserBar";
import { GuestBar } from "components/Header/GuestBar/GuestBar";

import SchoolIcon from '@material-ui/icons/School';
import "./Header.css";


export default function Header({ isLogin, user }) {

    function handleClick() {
        return (
            <Login />
        );
    }

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
                { isLogin ? <UserBar user={user.loginData.email}/> : <GuestBar onClick={handleClick}/> }

                </div>
            </nav>
        </div>
    );
}

Header.propTypes = {
    isLogin: PropTypes.bool,
    user: PropTypes.object
}
