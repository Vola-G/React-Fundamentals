import Button from "../Button/Button";
import Typography from '@material-ui/core/Typography';

export function AuthorAction({ author, handleAuthor, action }) {

    function handleClick() {
        handleAuthor(author)
    }

    return(
        <>
            <Typography gutterBottom variant="h6" component="p">
                {author}
            </Typography>
            <Button name={action} onClick={()=>handleClick()}/>
        </>
    );
}