import Input from "../Input/Input";
import Button from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import "./DescriptionForm.css"

export function DescriptionForm(props) {
    function handleClick() {
        props.onClick()
    }
    return (
        <div>
            <div className={"title-container"}>
                <Input label="Title"/>
                <Button name="Create course" onClick={()=>handleClick()}/>
            </div>
            <TextArea label="Description"/>
        </div>
    )
}