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
            <ParametersTitle title={title}/>
            <div className={"manageAuthor-container_center"}>
                {authors.map((author) => {
                    <AuthorAction author={author} onClick={()=> handleClick(author)} action={actionName} key={uuid()}/>
                })}
            </div>
        </div>
    );
}