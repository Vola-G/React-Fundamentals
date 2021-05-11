import { useState, useEffect } from "react";
import uuid from 'react-uuid';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom"

import { updateCourseThunk } from "../../store/courses/thunk"

import { CreateNewAuthor } from "../CreateNewAuthor/CreateNewAuthor";
import { CourseDuration } from "../CourseDuration/CourseDuration";
import { ManageAuthor } from "../ManageAuthor/ManageAuthor";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { formatDate } from "../../utils";

import "./UpdateCourse.css"

export default function UpdateCourse() {
    const location = useLocation();
    const dispatch = useDispatch();
    const authorsStore = useSelector(state => state.authorsReducer.authors);
    const { courses } = useSelector(state => state.coursesReducer);
    const course = courses.find(item => item.id === location.id);
    const [courseAuthors, setCourseAuthors] = useState(authorsStore.filter(item => course.authors.includes(item.id)) || []);
    const [authorsList, setAuthorsList] = useState(authorsStore.filter(item => !courseAuthors.includes(item.id)) || []);
    const [title, setTitle] = useState(course?.title || '');
    const [description, setDescription] = useState(course?.description || '');
    const [duration, setDuration] = useState(course?.duration || 0);

    // useEffect(()=> {
    //     !authorsList.length ? dispatch(getAuthors()) : null
    // }, [])

    // useEffect(()=>{
    //     setAuthorsList(authorsStore)
    // }, [authorsStore]);

    function handleClick(description) {
        const authors = courseAuthors.map(item => item.id)
        dispatch(
            updateCourseThunk({
                title,
                description,
                duration,
                authors,
                "id": uuid(),
                "creationDate": formatDate(),
            })
        )
    }

    function handleTitleChange(newTitle) {
        setTitle(newTitle)
    }

    function handleDescriptionChange(newDescription) {
        setDescription(newDescription);
    }

    function handleAddAuthor(name) {
        setAuthorsList(authorsList.filter(person => person !== name));
        setCourseAuthors([...courseAuthors, name]);
    }

    function handleDeleteAuthor(name) {
        setCourseAuthors(courseAuthors.filter(person => person !== name));
        setAuthorsList([...authorsList, name]);
    }

    function handleChangeDuration(time) {
        setDuration(Number(time))
    }

    return (
        <div className={"container-center"}>
            <div>
                <div className={"title-container"}>
                    <Input label="Title" value={title} type="text" onChange={handleTitleChange} />
                    <div>
                        <Link to={"/courses"} className={"btn-back"}>
                            <Button name="Back to courses" color="primary" icon={<ArrowBackIosIcon/>}  />
                        </Link>
                        <Link to={"/courses"}>
                            <Button name="Update course" variant="contained" color="primary" onClick={handleClick}/>
                        </Link>
                    </div>
                </div>
                <TextArea label="Description" value={description} onChange={handleDescriptionChange}/>
            </div>
            <div className={"parameters-container"}>
                <div className={"parameters-container_row"}>
                    <CreateNewAuthor/>
                    <ManageAuthor 
                        title="Authors" 
                        authors={authorsList} 
                        handleAuthor={handleAddAuthor}
                        actionName="Add author"
                        />
                </div>
                <div className={"parameters-container_row"}>
                    <CourseDuration value={duration} onAddDuration={handleChangeDuration}/>
                    <ManageAuthor 
                        title="Course Authors" 
                        authors={courseAuthors} 
                        handleAuthor={handleDeleteAuthor}
                        actionName="Delete author"
                        />
                </div>
            </div>
        </div>
    )
}

// UpdateCourse.propTypes = {
//     user: PropTypes.shape({
//       isAuth: PropTypes.bool,
//       name: PropTypes.string,
//       email: PropTypes.string,
//       token: PropTypes.string
//     }).isRequired,
// }
