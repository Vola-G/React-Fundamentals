import { AddAuthor } from "../AddAuthor/AddAuthor";
import { AuthorsList } from "../AuthorsList/AuthorsList";
import { CourseDuration } from "../CourseDuration/CourseDuration";
import { DeleteAuthors } from "../DeleteAuthors/DeleteAuthors";
import "./ParametersForm.css";


export function ParametersForm() {
    return(
        <div className={"parameters-container"}>
            <div className={"parameters-container_row"}>
                <AddAuthor />
                <AuthorsList />
            </div>
            <div className={"parameters-container_row"}>
                <CourseDuration />
                <DeleteAuthors />
            </div>
        </div>

    )
}