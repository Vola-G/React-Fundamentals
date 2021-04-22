import Cards from "../../components/Cards/Cards";
import SearchForm from "../../components/SearchForm/SearchForm";
import Button from "../../components/Button/Button";

import { useState, useEffect } from "react";
import "./Courses.css";

export default function Curses(props) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (value) => {
        setSearchTerm(value);
      };

    useEffect(() => {
        const results = props.courses.filter(course => course.title.toLowerCase().includes(searchTerm) || course.id.toLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm]);

    function handleClick() {
        props.onSwichPage()
    }

    return(
        <div className={"container-center"}>
            <div className={"searchform-container"}>
                <SearchForm value={searchTerm} onChangeTerm={(value)=> handleChange(value)}/>
                <Button onClick={()=>handleClick()} name="Add new course"/>
            </div>
            <Cards courses={searchResults} authors={props.authors}/>
        </div>
    )
}