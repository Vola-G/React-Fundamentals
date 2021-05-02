import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Cards from "../../components/Cards/Cards";
import SearchForm from "../../components/SearchForm/SearchForm";
import Button from "../../components/Button/Button";

import "./Courses.css";

export default function Courses({ courses, authors }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(courses);

    const handleChange = (value) => {
        setSearchTerm(value);
      };

    useEffect(() => {
        const results = courses.filter(course => course.title.toLowerCase().includes(searchTerm) || course.id.toLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm, courses]);

    return(
        <div className={"container-center"}>
            <div className={"searchform-container"}>
                <SearchForm value={searchTerm} onChangeTerm={handleChange}/>
                <Link to={"/courses/add"}>
                    <Button name="Add new course" variant="contained" color="primary" />
                </Link>
            </div>
            <div className={"courses-container"}>
                <Cards courses={searchResults} authors={authors}/>
            </div>
        </div>
    )
}

Courses.propTypes = {
    courses: PropTypes.object,
    authors: PropTypes.object,
    title: PropTypes.string
}
