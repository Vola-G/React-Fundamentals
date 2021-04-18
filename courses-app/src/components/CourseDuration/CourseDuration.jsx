import Input from "../Input/Input"
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import Typography from '@material-ui/core/Typography';
import "./CourseDuration.css";

export function CourseDuration() {
    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Duration"/>
            <Input label="Duration"/>
            <Typography gutterBottom variant="h4" component="h4" style={{textAlign: "start"}}>
                Duration: <b>time</b> hours
            </Typography>
        </div>
    )
}