import { useState } from "react";
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { connect } from "react-redux";

import { saveCourse } from "../../store/courses/actionCreators"

import { DescriptionForm } from "../../components/DescriptionForm/DescriptionForm";
import ParametersForm from "../../components/ParametersForm/ParametersForm";

import { formatDate } from "../../utils"

function CreateCourse({ saveCourse, onAddAuthor }) {
    const [parsmeters, setParameters] = useState({});

    function handleClick(descrip) {
        saveCourse({
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

CreateCourse.propTypes = {
    saveCourse: PropTypes.func.isRequired, 
    onAddAuthor: PropTypes.func.isRequired
}


export default connect(null, {saveCourse})(CreateCourse)
