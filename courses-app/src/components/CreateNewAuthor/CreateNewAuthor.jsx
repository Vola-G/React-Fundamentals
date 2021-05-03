import { useState } from 'react';
import PropTypes from 'prop-types';

import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";

import { authorFactory } from '../../utils';

import "./CreateNewAuthor.css";


export function CreateNewAuthor({ onCreateAuthor }) {
    const [value, setValue] = useState("");

    function handleChange(newAuthor) {
        setValue(newAuthor);
    }

    function handleClick() {
        onCreateAuthor(authorFactory(value));
        setValue("");
    }

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Add author" variant="h4" component="h2"/>
            <div className={"parameter-block_form"}>
                <Input label="Author name" type="text" value={value} onChange={handleChange}/>
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
