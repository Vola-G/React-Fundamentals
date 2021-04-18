import Button from "../Button/Button";
import Typography from '@material-ui/core/Typography';
import "./ManageAuthor.css";

export function ManageAuthor({ author, actionName }) {
    return(
        <div className={"manageAuthor-container_center"}>
            <Typography gutterBottom variant="h6" component="p">
                {author}
            </Typography>
            <Button name={actionName}/>
        </div>
    );
}