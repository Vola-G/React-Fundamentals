import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { CourseCard } from '../../components/CourseCard/CourseCard';
import SearchForm from "../../components/SearchForm/SearchForm";
import Button from "../../components/Button/Button";

import "./Courses.css";

const Courses = ({ courses, authors }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(courses);

    const handleChange = (value) => {
        setSearchTerm(value);
    };

    useEffect(() => {
        const results = courses.filter(course => course.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || course.id.toLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm, courses]);

    return(
        <div className={"container-center"}>
            <div className={"searchform-container"}>
                <SearchForm value={searchTerm} onChangeTerm={handleChange}/>
                <Link to={"/courses/add"}>
                    <Button name="Add new course" variant="contained" color="primary" data-testid="addCourse-btn"/>
                </Link>
            </div>
            <div className={"courses-container"} data-testid="card">
                {searchResults.map(course => {
                    return (
                        <CourseCard key={course.id} course={course} authorsList={authors} />
                    )
                })}
            </div> 
        </div>
    )
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        creationDate: PropTypes.string,
        duration: PropTypes.number,
        authors: PropTypes.array
    })).isRequired,
    authors:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })).isRequired,
}

function mapStateToProps(state) {
    const { courses } = state.coursesReducer
    const { authors } = state.authorsReducer
    return { courses, authors }
}

export default connect(mapStateToProps)(Courses)
