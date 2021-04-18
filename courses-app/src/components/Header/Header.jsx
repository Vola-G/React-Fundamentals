import "./Header.css";
import SchoolIcon from '@material-ui/icons/School';
import Button from "../Button/Button"

export default function Header() {
    return (
        <div className={"header"}>
            <nav className={"navbar"}>
                <div className={"navbar-left"}>
                    <SchoolIcon color="primary" style={{ fontSize: 30 }}/>
                    <h3 className={"navbar-title"}>Courses-App</h3>
                </div>
                <div className={"navbar-right"}>
                    <h5 className={"navbar-user"}>Dave</h5>
                    <Button name="Logout"/>
                </div>
            </nav>
        </div>
    );
}