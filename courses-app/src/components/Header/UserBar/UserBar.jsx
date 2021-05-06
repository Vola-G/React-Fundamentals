import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Button from "components/Button/Button";

export const UserBar = ({ user, onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <>
            <h4 className={"navbar-user"}>{user}</h4>
            <Link to={"/login"}>
                <Button name="Logout" variant="contained" color="primary" onClick={handleClick} style={"navbar-btn"}/>
            </Link>
        </>
    ) 
}

UserBar.propTypes = {
    user: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
