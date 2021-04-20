import Button from "../Button/Button";
import Typography from '@material-ui/core/Typography';
import "./AuthorAction.css"

export function AuthorAction({ author, handleAuthor, action }) {

    function handleClick() {
        handleAuthor(author)
    }

    return(
        <div className={"author-action_block"}>
            <Typography gutterBottom variant="h6" component="p">
                {author.name}
            </Typography>
            <Button name={action} onClick={()=>handleClick()}/>
        </div>
    );
}