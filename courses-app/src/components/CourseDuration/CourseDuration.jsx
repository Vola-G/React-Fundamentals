import { useState } from 'react';
import Input from "../Input/Input";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import Typography from '@material-ui/core/Typography';
import { formatTime } from '../../utils';
import "./CourseDuration.css";

export function CourseDuration(props) {
    const [value, setValue] = useState("");

    function handleChange(newValue) {
        setValue(newValue);
        props.onAddDuration(formatTime(newValue))
    }

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Duration"/>
            <div className={"parameter-block_form"}>
                <Input label="Duration" value={value} onChange={handleChange}/>
                <Typography gutterBottom variant="h4" component="h4" style={{textAlign: "start", marginTop: "50px"}}>
                    Duration: <b>{formatTime(value)}</b> hours
                </Typography>
            </div>
        </div>
    )
}