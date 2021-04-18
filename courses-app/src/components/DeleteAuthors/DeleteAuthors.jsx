import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import { ManageAuthor } from "../ManageAuthor/ManageAuthor";
import "./DeleteAuthors.css";

export function DeleteAuthors() {
    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Course Authors"/>
            <ManageAuthor author="Author name" actionName="Delete author"/>
        </div>
    )
}