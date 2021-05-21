import { useState, useEffect } from "react";
import uuid from 'react-uuid';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom"

import { saveCourseThunk } from "../../store/courses/thunk"

import { CreateNewAuthor } from "../../components/CreateNewAuthor/CreateNewAuthor";
import { CourseDuration } from "../../components/CourseDuration/CourseDuration";
import { ManageAuthor } from "../../components/ManageAuthor/ManageAuthor";

import { getAuthors } from "store/author/actionCreators";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { TextArea } from "../../components/TextArea/TextArea";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { formatDate, useDescriptionValidation, useTimeValidation } from "../../utils";

import "./CreateCourse.css"

export default function CreateCourse() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const authorsStore = useSelector(state => state.authorsReducer.authors);
    const [authorsList, setAuthorsList] = useState(authorsStore);
    const [courseAuthors, setCourseAuthors] = useState([]);
    const [duration, setDuration] = useState("");
    const [btnBorder, setBtnBorder] = useState("outlined");
    const [btnColor, setBtnColor] = useState("secondary");
    const [isValid, setValid] = useState(false);

    const [isTitleValid, setTitleValid] = useState(false);
    const [isDescriptionValid, setDescriptionValid] = useState(false);
    const [isDurationValid, setDurationValid] = useState(false);
    const [titleWarning, setTitleWarning] = useState("");
    const [descriptionWarning, setDescriptionWarning] = useState("");
    const [durationWarning, setDurationWarning] = useState("");

    useEffect(()=> {
        if(isTitleValid && isDescriptionValid && isDurationValid && courseAuthors.length) {
            setBtnBorder("contained");
            setBtnColor("primary");
            setValid(true)
        } else {
            setBtnBorder("outlined");
            setBtnColor("secondary");
            setValid(false)
        }
    }, [title, description, duration, courseAuthors])

    useEffect(()=>{
        setAuthorsList(authorsStore)
    }, [authorsStore]);

    function handleClick() {
        const authors = courseAuthors.map(item => item.id)
        if(isValid) {
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
            history.push("/courses")
        }
    }

    function handleTitleChange(newTitle) {
        setTitle(newTitle)
        const titleStatus = useDescriptionValidation(newTitle);
        if(titleStatus.isTextValid) {
            setTitleWarning(titleStatus.warning)
            setTitleValid(true)
        } else {
            setTitleWarning(titleStatus.warning)
            setTitleValid(false)
        }  
    }

    function handleDescriptionChange(newDescription) {
        setDescription(newDescription);
        const descrStatus = useDescriptionValidation(newDescription);
        if(descrStatus.isTextValid) {
            setDescriptionWarning(descrStatus.warning)
            setDescriptionValid(true)
        } else {
            setDescriptionWarning(descrStatus.warning)
            setDescriptionValid(false)
        }  
        
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
        const timeStatus = useTimeValidation(time);
        setDuration(Number(time))
        if(timeStatus.isTimeValid) {
            setDurationWarning(timeStatus.warning)
            setDurationValid(true)
        } else {
            setDurationWarning(timeStatus.warning)
            setDurationValid(false)
        }
    }

    return (
        <div className={"container-center"}>
            <div>
                <div className={"title-container"}>
                    <Input label="Title" value={title} type="text" onChange={handleTitleChange} helperText={titleWarning}/>
                    <div>
                        <Link to={"/courses"} className={"btn-back"}>
                            <Button name="Back to courses" color="primary" icon={<ArrowBackIosIcon/>}  />
                        </Link>
                        <Button name="Create course" variant={btnBorder} color={btnColor} onClick={handleClick}/>
                    </div>
                </div>
                <TextArea label="Description" value={description} onChange={handleDescriptionChange} helperText={descriptionWarning}/>
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
                    <CourseDuration onAddDuration={handleChangeDuration} helperText={durationWarning}/>
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
