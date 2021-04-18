import Cards from "../../Cards/Cards";
import SearchForm from "../../SearchForm/SearchForm";
import Button from "../../Button/Button";
import "./Courses.css";

export default function Curses(props) {
    return(
        <div className={"container-center"}>
            <div className={"searchform-container"}>
                <SearchForm />
                {/* <Button name="Add new course"/> */}
                <Button onClick={()=>props.onAddCourse()} name="Add new course"/>
            </div>
            <Cards />
        </div>
    )
}