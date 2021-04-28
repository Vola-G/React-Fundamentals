import { useState } from "react";
import { CreateNewAuthor } from "../CreateNewAuthor/CreateNewAuthor";
import { CourseDuration } from "../CourseDuration/CourseDuration";
import { mockedAddAuthor } from "../../localService/Mock";
import { ManageAuthor } from "../ManageAuthor/ManageAuthor";
import { getAuthorsId } from "../../utils";
import "./ParametersForm.css";


export function ParametersForm(props) {
    let [authorsList, setAuthorsList] = useState(mockedAddAuthor);
    let [authors, setAuthors] = useState([]);
    let [duration, setDuration] = useState("");

    function handleCreateAuthor(newAuthor) {
        setAuthorsList([...authorsList, newAuthor]);
        props.onAddAuthor(newAuthor);
    }

    function handleAddAuthor(name) {
        setAuthorsList(authorsList.filter(person => person !== name));
        setAuthors([...authors, name]);
        props.onParametersChange({"duration": duration, ...getAuthorsId([...authors, name])})
    }

    function handleDeleteAuthor(name) {
        setAuthors(authors.filter(person => person !== name));
        setAuthorsList([...authorsList, name]);
    }

    function handleChangeDuration(time) {
        setDuration(time)
        props.onParametersChange({"duration": time, ...getAuthorsId(authors)})
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
                    authors={authors} 
                    handleAuthor={(author)=>handleDeleteAuthor(author)}
                    actionName="Delete author"
                    />
            </div>
        </div>

    )
}
