import { Link } from "react-router-dom";

import Button from "components/Button/Button";

export const GuestBar = ({ onClick }) => {
    function handleClick() {
        onClick();
    }
    return(
        <>
            <h4>Guest</h4>
            <Link to={"/login"}>
                <Button name="Login" variant="contained" color="primary" onClick={handleClick} style={"navbar-btn"}/>
            </Link>
        </> 
    )
}
