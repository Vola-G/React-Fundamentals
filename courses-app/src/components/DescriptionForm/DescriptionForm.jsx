import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import { TextArea } from "../TextArea/TextArea";
import "./DescriptionForm.css"

export function DescriptionForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    function handleClick() {
        props.onClick({"title": title, "description": description})
    }

    function handleTitleChange(newTitle) {
        setTitle(newTitle)
    }

    function handleDescriptionChange(newDescription) {
        setDescription(newDescription);
    }

    return (
        <div>
            <div className={"title-container"}>
                <Input label="Title" value={title} onChange={(newTitle)=> handleTitleChange(newTitle)}/>
                <Button name="Create course" onClick={()=>handleClick()}/>
            </div>
            <TextArea label="Description" value={description} onChange={(newDescription)=> handleDescriptionChange(newDescription)}/>
        </div>
    )
}