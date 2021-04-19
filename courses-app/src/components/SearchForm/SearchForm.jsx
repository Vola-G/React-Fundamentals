import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "../SearchForm/SearchForm.css"

export default function SearchForm({ serchTerm, onChangeTerm }) {
    const [value, setValue] = useState("");

    function handleChange(term) {
        setValue(term)
    }

    function handleClick() {
        onChangeTerm(value)
    }

    return (
        <form className={"form-container"}>
            <Input lable="Search" value={serchTerm} onChange={(term)=>handleChange(term)}/>
            <Button name="Search" onClick={handleClick}/>
        </form>
    )
}