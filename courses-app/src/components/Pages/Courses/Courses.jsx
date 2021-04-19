import Cards from "../../Cards/Cards";
import SearchForm from "../../SearchForm/SearchForm";
import Button from "../../Button/Button";
import { mockedCourseList, mockedAddAuthor } from "../../../localService/Mock";
import { useState, useEffect } from "react";
import "./Courses.css";

export default function Curses(props) {
    const coursesList = mockedCourseList.map(course => {
        mockedAddAuthor.forEach(author => {
            if (course.authors.includes(author.id)) {
                course.authors[course.authors.indexOf(author.id)] = author.name;
            }
        })
        return course;
    })
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (value) => {
        setSearchTerm(value);
      };

    useEffect(() => {
        const results = coursesList.filter(course => course.title.toLowerCase().includes(searchTerm) || course.id.toLowerCase().includes(searchTerm));
        //     course.authors.map(author => author.toLowerCase().includes(searchTerm))
        // }
        setSearchResults(results);
    }, [searchTerm]);

    function handleClick() {
        props.onAddCourse()
    }

    return(
        <div className={"container-center"}>
            <div className={"searchform-container"}>
                <SearchForm value={searchTerm} onChangeTerm={(value)=> handleChange(value)}/>
                <Button onClick={()=>handleClick()} name="Add new course"/>
            </div>
            <Cards courses={searchResults}/>
        </div>
    )
}