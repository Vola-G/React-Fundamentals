import Input from "../Input/Input";
import Button from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import "./DescriptionForm.css"

export function DescriptionForm() {
    return (
        <div>
            <div className={"title-container"}>
                <Input label="Title"/>
                <Button name="Create course"/>
            </div>
            <TextArea label="Description"/>
        </div>
    )
}