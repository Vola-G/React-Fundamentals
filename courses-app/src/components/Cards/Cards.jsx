import PropTypes from 'prop-types';

import CourseCard from '../CourseCard/CourseCard';

export default function Cards({ courses, authors }) {
    return (
        courses.map(course => {
            return (
                <CourseCard key={course.id} course={course} authorsList={authors}/>
            )
        })
    )
}

Cards.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        creationDate: PropTypes.string,
        duration: PropTypes.number,
        authors: PropTypes.array
    })).isRequired,
    authors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })).isRequired,
}
