import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { logOut } from "store/user/actionCreators";

import { UserBar } from "components/Header/UserBar/UserBar";
import { GuestBar } from "components/Header/GuestBar/GuestBar";

import SchoolIcon from '@material-ui/icons/School';
import "./Header.css";

function Header(props) {
    const onLogout = () => {
        props.logOut()
        console.log("LOGOUT")
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
                    { props.user.isAuth ? <UserBar user={props.user.email} onClick={onLogout}/> : <GuestBar/> }
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

// function mapStateToProps(state) {
//     const user = state.userReducer
//     return user
// }


export default connect(null, {logOut})(Header)
