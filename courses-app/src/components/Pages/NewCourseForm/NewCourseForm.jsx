import { DescriptionForm } from "../../DescriptionForm/DescriptionForm";
import { ParametersForm } from "../../ParametersForm/ParametersForm";
import "./NewCourseForm.css";

export function NewCourseForm() {
    return (
        <div className={"container-center"}>
            <DescriptionForm />
            <ParametersForm />
        </div>
    )
}