import { useState, useEffect } from "react";
import { CreateNewAuthor } from "../CreateNewAuthor/CreateNewAuthor";
import { CourseDuration } from "../CourseDuration/CourseDuration";
import { mockedAddAuthor } from "../../localService/Mock";
import { ManageAuthor } from "../ManageAuthor/ManageAuthor";
import "./ParametersForm.css";


export function ParametersForm() {
    let [allAuthors, setNewAuthor]  = useState(mockedAddAuthor);
    let [authorsList, setAuthors] = useState([]);
    let [courseAuthors, setCourseAuthors] = useState([]);

    useEffect(()=> {
        const authors = allAuthors.map(item => item.name);
        setAuthors(authors);
    }, [allAuthors])

    function handleCreateAuthor(newAuthor) {
        setNewAuthor([...allAuthors, newAuthor]);
    }

    function handleAddAuthor(name) {
        setAuthors(authorsList.filter(person => person !== name))
        setCourseAuthors([...courseAuthors, name])
    }

    function handleDeleteAuthor(name) {
        setCourseAuthors(courseAuthors.filter(person => person !== name));
        setAuthors([...authorsList, name]);
    }

    return(
        <div className={"parameters-container"}>
            <div className={"parameters-container_row"}>
                <CreateNewAuthor 
                    authors={allAuthors} 
                    onCreateAuthor={(newAuthor) => handleCreateAuthor(newAuthor)}
                    />
                <ManageAuthor 
                    title="Authors" 
                    authors={authorsList} 
                    handleAuthor={()=>handleAddAuthor()}
                    actionName="Add author"
                    />
            </div>
            <div className={"parameters-container_row"}>
                <CourseDuration />
                <ManageAuthor 
                    title="Course Authors" 
                    authors={courseAuthors} 
                    handleAuthor={()=>handleDeleteAuthor()}
                    actionName="Delete author"
                    />
            </div>
        </div>

    )
}