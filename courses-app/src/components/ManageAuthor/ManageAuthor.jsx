import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import { AuthorAction } from "../AuthorAction/AuthorAction";
import "./ManageAuthor.css";
import uuid from 'react-uuid';
import { useEffect } from "react";

export function ManageAuthor({ title, authors, handleAuthor, actionName }) {

    function handleClick(author) {
        handleAuthor(author)
    }

    useEffect(()=>{
        console.log(authors);
    },[authors]);

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title={title}/>
            <div className={"manageAuthor-container_center"}>
            {
                authors.map((author) => <AuthorAction author={author} handleAuthor={(author)=> handleClick(author)} action={actionName} key={uuid()}/>)
            }
            </div>
        </div>
    );
}