import { ManageAuthor } from "../ManageAuthor/ManageAuthor";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import "./AuthorsList.css";

export function AuthorsList() {
    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Authors"/>
            <ManageAuthor author="Author name" actionName="Add author"/>
        </div>
    );
}