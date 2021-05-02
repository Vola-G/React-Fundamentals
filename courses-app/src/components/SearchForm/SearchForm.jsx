import { useState } from "react";
import PropTypes from 'prop-types';

import Input from "../Input/Input";
import Button from "../Button/Button";

import "../SearchForm/SearchForm.css"

export default function SearchForm({ searchTerm, onChangeTerm }) {
    const [value, setValue] = useState("");

    function handleChange(term) {
        setValue(term)
    }

    function handleClick() {
        onChangeTerm(value)
    }

    return (
        <form className={"form-container"}>
            <Input lable="Search" value={searchTerm} type="text" onChange={handleChange} style={"search-input"}/>
            <Button name="Search" variant="contained" color="primary" onClick={handleClick}/>
        </form>
    )
}

SearchForm.propTypes = {
    searchTerm: PropTypes.string,
    onChangeTerm: PropTypes.func
}
