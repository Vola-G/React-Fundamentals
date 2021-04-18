import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import "./AddAuthor.css";
import { useState } from 'react';
import { authorFactory } from '../../utils';

export function AddAuthor(props) {
    const [value, setValue] = useState("");

    function handleChange(newAuthor) {
        setValue(newAuthor);
    }

    function handleClick() {
        props.authors.push(authorFactory(value));
        setValue("");
    }

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Add author"/>
            <Input label="Author name" value={value} onChange={handleChange}/>
            <div style={{width: "auto"}}>
                <Button name="Create Author" onClick={handleClick}/>
            </div>
        </div>
    );
}