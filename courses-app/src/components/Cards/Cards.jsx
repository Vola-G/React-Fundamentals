import CourseCard from '../CourseCard/CourseCard';

export default function Cards({ courses, authors }) {
    return (
        courses.map(course => {
            return (
                <CourseCard key={course.id} course={course} authors={authors}/>
            )
        })
    )
}
