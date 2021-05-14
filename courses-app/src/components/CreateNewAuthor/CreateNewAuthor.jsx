import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { saveAuthorsThunk } from "store/author/thunk";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";

import { useAuthorValidation } from "../../utils/validation";

export function CreateNewAuthor() {
    const dispathc = useDispatch();
    const [author, setAuthor] = useState("");
    const [isAuthorValid, setAuthorValid] = useState(false);
    const [authorWarning, setAuthorWarning] = useState("")

    function handleChange(newAuthor) {
        setAuthor(newAuthor);
        if(useAuthorValidation(newAuthor)) {
            setAuthorValid(true);
            setAuthorWarning("")
        } else {
            setAuthorValid(false);
            setAuthorWarning("Author name should be at least 2 characters")
        } 
    }

    function handleClick() {
        if(isAuthorValid && author.length) {
            dispathc(saveAuthorsThunk(author));
            setAuthor("");
            setAuthorWarning("")
        }
    }

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Add author" variant="h4" component="h2"/>
            <div className={"parameter-block_form"}>
                <Input label="Author name" type="text" value={author} onChange={handleChange} helperText={authorWarning}/>
                <div style={{width: "auto", margin: "30px"}}>
                    <Button name="Create Author" variant="contained" color="primary" onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}

CreateNewAuthor.propTypes = {
    onCreateAuthor: PropTypes.func
}
