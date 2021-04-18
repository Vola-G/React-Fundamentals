import Cards from "../../Cards/Cards";
import SearchForm from "../../SearchForm/SearchForm";
import Button from "../../Button/Button";
import "./Courses.css";

export default function Curses(props) {
    function handleClick() {
        props.onAddCourse()
    }

    return(
        <div className={"container-center"}>
            <div className={"searchform-container"}>
                <SearchForm />
                {/* <Button name="Add new course"/> */}
                <Button onClick={()=>handleClick()} name="Add new course"/>
            </div>
            <Cards />
        </div>
    )
}