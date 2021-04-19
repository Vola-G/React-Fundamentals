import CourseCard from '../CourseCard/CourseCard'

export default function Cards({ courses }) {
    return (
        courses.map(course => {
            return <CourseCard key={course.id} {...course}/>
        })
    )
}