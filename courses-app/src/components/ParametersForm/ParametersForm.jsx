import { useState, useEffect } from "react";
import { CreateNewAuthor } from "../CreateNewAuthor/CreateNewAuthor";
import { CourseDuration } from "../CourseDuration/CourseDuration";
import { mockedAddAuthor } from "../../localService/Mock";
import { ManageAuthor } from "../ManageAuthor/ManageAuthor";
import { getAuthorsId } from "../../utils";
import "./ParametersForm.css";


export function ParametersForm(props) {
    let [authorsList, setAuthors] = useState(mockedAddAuthor);
    let [courseAuthors, setCourseAuthors] = useState([]);
    let [duration, setDuration] = useState("");
    let [courseParams, setCourseParams] = useState({});


    useEffect(()=>{
        props.onParametersChange(courseParams)
    }, [courseParams])


    function handleCreateAuthor(newAuthor) {
        setAuthors([...authorsList, newAuthor]);
    }

    function handleAddAuthor(name) {
        setAuthors(authorsList.filter(person => person !== name));
        setCourseAuthors([...courseAuthors, name]);
        setCourseParams({"duration": duration, ...getAuthorsId(courseAuthors)})
    }

    function handleDeleteAuthor(name) {
        setCourseAuthors(courseAuthors.filter(person => person !== name));
        setAuthors([...authorsList, name]);
    }

    function handleChangeDuration(time) {
        setDuration(time)
    }

    return(
        <div className={"parameters-container"}>
            <div className={"parameters-container_row"}>
                <CreateNewAuthor onCreateAuthor={(newAuthor) => handleCreateAuthor(newAuthor)} />
                <ManageAuthor 
                    title="Authors" 
                    authors={authorsList} 
                    handleAuthor={(author)=>handleAddAuthor(author)}
                    actionName="Add author"
                    />
            </div>
            <div className={"parameters-container_row"}>
                <CourseDuration onAddDuration={(time)=> handleChangeDuration(time)}/>
                <ManageAuthor 
                    title="Course Authors" 
                    authors={courseAuthors} 
                    handleAuthor={(author)=>handleDeleteAuthor(author)}
                    actionName="Delete author"
                    />
            </div>
        </div>

    )
}