import { DescriptionForm } from "../../DescriptionForm/DescriptionForm";
import { ParametersForm } from "../../ParametersForm/ParametersForm";
import "./NewCourseForm.css";

export function NewCourseForm(props) {
    function handleClick() {
        props.onAddCourse()
    }
    return (
        <div className={"container-center"}>
            <DescriptionForm onClick={()=>handleClick()}/>
            <ParametersForm />
        </div>
    )
}