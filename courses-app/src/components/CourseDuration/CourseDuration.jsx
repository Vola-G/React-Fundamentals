import { useState } from 'react';
import PropTypes from 'prop-types';

import Input from "../Input/Input";
import { ParametersTitle } from "../ParametersTitle/ParametersTitle";
import Typography from '@material-ui/core/Typography';

import { formatTime } from '../../utils';

export function CourseDuration({ value, onAddDuration, helperText }) {
    const [duration, setDuration] = useState(value || "");

    function handleChange(time) {
        setDuration(time);
        onAddDuration(time)
    }

    return(
        <div className={"parameter-block"}>
            <ParametersTitle title="Duration" variant="h4" component="h2"/>
            <div className={"parameter-block_form"}>
                <Input label="Duration" value={duration} type="number" onChange={handleChange} helperText={helperText}/>
                <Typography gutterBottom variant="h4" component="h4" style={{textAlign: "start", marginTop: "50px"}}>
                    Duration: <b>{formatTime(duration)}</b> hours
                </Typography>
            </div>
        </div>
    )
}

CourseDuration.propTypes = {
    value: PropTypes.number,
    onAddDuration: PropTypes.func,
    helperText: PropTypes.string
}
