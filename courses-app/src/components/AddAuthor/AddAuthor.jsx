import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import "./AddAuthor.css";

export function AddAuthor() {
    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Add author"/>
            <Input label="Author name"/>
            <div style={{width: "auto"}}>
                <Button name="Create Author"/>
            </div>
        </div>
    );
}