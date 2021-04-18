import { mockedCourseList } from "../../localService/Mock";
import CourseCard from '../CourseCard/CourseCard'

export default function Cards() {
    return (
        mockedCourseList.map(course => {
            return <CourseCard key={course.id} {...course}/>
        })
    )
}