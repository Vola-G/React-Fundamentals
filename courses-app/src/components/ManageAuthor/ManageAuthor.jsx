import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import { AuthorAction } from "../AuthorAction/AuthorAction";

import "./ManageAuthor.css";


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

ManageAuthor.propTypes = {
    title: PropTypes.string,
    authors: PropTypes.array,
    handleAuthor: PropTypes.func,
    actionName: PropTypes.string,
}
