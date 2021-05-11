import { useState, useEffect } from "react";
import uuid from 'react-uuid';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

import { saveCourseThunk } from "../../store/courses/thunk"

import { CreateNewAuthor } from "../../components/CreateNewAuthor/CreateNewAuthor";
import { CourseDuration } from "../../components/CourseDuration/CourseDuration";
import { ManageAuthor } from "../../components/ManageAuthor/ManageAuthor";

import { getAuthors } from "store/author/actionCreators";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { TextArea } from "../../components/TextArea/TextArea";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { formatDate } from "../../utils";

import "./CreateCourse.css"

export default function CreateCourse() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const authorsStore = useSelector(state => state.authorsReducer.authors);
    const [authorsList, setAuthorsList] = useState(authorsStore);
    const [courseAuthors, setCourseAuthors] = useState([]);
    const [duration, setDuration] = useState("");

    useEffect(()=> {
        !authorsList.length ? dispatch(getAuthors()) : null
    }, [])

    useEffect(()=>{
        setAuthorsList(authorsStore)
    }, [authorsStore]);

    function handleClick() {
        const authors = courseAuthors.map(item => item.id)
        dispatch(
            saveCourseThunk({
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
                            <Button name="Create course" variant="contained" color="primary" onClick={handleClick}/>
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
                    <CourseDuration onAddDuration={handleChangeDuration}/>
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

CreateCourse.propTypes = {
    user: PropTypes.shape({
      isAuth: PropTypes.bool,
      name: PropTypes.string,
      email: PropTypes.string,
      token: PropTypes.string
    }).isRequired,
}
