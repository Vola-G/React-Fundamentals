import { useState } from "react";
import { DescriptionForm } from "../../components/DescriptionForm/DescriptionForm";
import { ParametersForm } from "../../components/ParametersForm/ParametersForm";
import uuid from 'react-uuid';
import { formatDate } from "../../utils"
import "./NewCourseForm.css";

export function NewCourseForm(props) {
    const [parsmeters, setParameters] = useState({});

    function handleClick(descrip) {
        props.onAddCourse({
            "id": uuid(), 
            ...descrip,
            "creationDate": formatDate(), 
            ...parsmeters});
        props.onSwichPage()
    }

    function handleParametersChange(newParams) {
        setParameters(newParams)
    }


    return (
        <div className={"container-center"}>
            <DescriptionForm onClick={(description)=>handleClick(description)}/>
            <ParametersForm onParametersChange={(newParams)=>handleParametersChange(newParams)}/>
        </div>
    )
}