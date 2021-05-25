import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CourseCard } from '../../components/CourseCard/CourseCard';
import SearchForm from "../../components/SearchForm/SearchForm";
import Button from "../../components/Button/Button";

import "./Courses.css";

export const Courses = () => {
    const { courses } = useSelector(state => state.coursesReducer)
    const { authors } = useSelector(state => state.authorsReducer)
    const user = useSelector(state => state.userReducer)
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
                
                {user.role === "admin" ?
                    <Link to={"/courses/add"}>
                        <Button name="Add new course" variant="contained" color="primary" data-testid="addCourse-btn"/>
                    </Link> 
                    : null
                }

            </div>
            <div className={"courses-container"} data-testid="cards-list">
                {searchResults.map(course => {
                    return (
                        <CourseCard key={course.id} course={course} authorsList={authors} />
                    )
                })}
            </div> 
        </div>
    )
}

// Courses.propTypes = {
//     courses: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string,
//         title: PropTypes.string,
//         description: PropTypes.string,
//         creationDate: PropTypes.string,
//         duration: PropTypes.number,
//         authors: PropTypes.array
//     })).isRequired,
//     authors:PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string
//     })).isRequired,
//     user:PropTypes.shape({
//         isAuth: PropTypes.bool,
//         name: PropTypes.string,
//         email: PropTypes.string,
//         token: PropTypes.string,
//         role: PropTypes.string,
//     }).isRequired,
// }

// function mapStateToProps(state) {
//     const { courses } = state.coursesReducer
//     const { authors } = state.authorsReducer
//     const user = state.userReducer
//     return { courses, authors, user }
// }

// export default connect(mapStateToProps)(Courses)
