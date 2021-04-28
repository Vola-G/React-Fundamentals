import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import "./CreateNewAuthor.css";
import { useState } from 'react';
import { authorFactory } from '../../utils';

export function CreateNewAuthor(props) {
    const [value, setValue] = useState("");

    function handleChange(newAuthor) {
        setValue(newAuthor);
    }

    function handleClick() {
        props.onCreateAuthor(authorFactory(value));
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