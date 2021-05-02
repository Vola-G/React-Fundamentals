import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Input from "../Input/Input";
import Button from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import "./DescriptionForm.css"

export function DescriptionForm({ onClick }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    function handleClick() {
        onClick({"title": title, "description": description})
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
                <Input label="Title" value={title} type="text" onChange={handleTitleChange} />
                <div>
                    <Link to={"/courses"} className={"btn-back"}>
                        <Button name="Back to courses" color="primary" icon={<ArrowBackIosIcon/>}  />
                    </Link>
                    <Link to={"/courses"}>
                        <Button name="Create course" variant="contained" color="primary" onClick={handleClick}/>
                    </Link>
                </div>
            </div>
            <TextArea label="Description" value={description} onChange={handleDescriptionChange}/>
        </div>
    )
}

DescriptionForm.propTypes = {
    onClick: PropTypes.func
  }
