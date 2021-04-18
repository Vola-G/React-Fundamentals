import Input from "../Input/Input";
import Button from "../Button/Button";
import "../SearchForm/SearchForm.css"

export default function SearchForm() {
    return (
        <form className={"form-container"}>
            <Input lable="Search" width="80%"/>
            <Button name="Search"/>
        </form>
    )
}