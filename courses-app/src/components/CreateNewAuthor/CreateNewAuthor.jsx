import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from "react-redux";

import { saveAuthors } from "store/author/actionCreators";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";

import { authorFactory } from '../../utils';

function CreateNewAuthor() {
    const [value, setValue] = useState("");
    const dispathc = useDispatch();

    function handleChange(newAuthor) {
        setValue(newAuthor);
    }

    function handleClick() {
        dispathc(saveAuthors(authorFactory(value)));
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


export default connect(null, {saveAuthors})(CreateNewAuthor);
