import { useState } from "react";
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import { DescriptionForm } from "../../components/DescriptionForm/DescriptionForm";
import { ParametersForm } from "../../components/ParametersForm/ParametersForm";

import { formatDate } from "../../utils"

export function NewCourseForm({ onAddCourse, onAddAuthor }) {
    const [parsmeters, setParameters] = useState({});

    function handleClick(descrip) {
        onAddCourse({
            "id": uuid(), 
            ...descrip,
            "creationDate": formatDate(), 
            ...parsmeters});
    }

    function handleParametersChange(newParams) {
        setParameters(newParams)
    }

    function handleAddAuthor(newAuthor) {
        onAddAuthor(newAuthor)
    }



    return (
        <div className={"container-center"}>
            <DescriptionForm onClick={(description)=>handleClick(description)}/>
            <ParametersForm 
                onParametersChange={(newParams)=>handleParametersChange(newParams)}
                onAddAuthor={(newAuthor)=>handleAddAuthor(newAuthor)}
                />
        </div>
    )
}

NewCourseForm.propTypes = {
    onAddCourse: PropTypes.func, 
    onAddAuthor: PropTypes.func
}
