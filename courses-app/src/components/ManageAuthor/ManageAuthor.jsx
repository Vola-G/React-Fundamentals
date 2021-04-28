import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import { AuthorAction } from "../AuthorAction/AuthorAction";
import "./ManageAuthor.css";
import uuid from 'react-uuid';

export function ManageAuthor({ title, authors, handleAuthor, actionName }) {

    function handleClick(author) {
        handleAuthor(author)
    }

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title={title} variant="h4" component="h2"/>
            <div className={"manageAuthor-container_center"}>
            {
                authors.map((author) => 
                <AuthorAction author={author} handleAuthor={handleClick} action={actionName} key={uuid()}/>)
            }
            </div>
        </div>
    );
}