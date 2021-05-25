import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

export function ParametersTitle({ title, variant, component }) {
    return(
        <Typography gutterBottom variant={variant} component={component}>
            {title}
        </Typography>
    )
}

ParametersTitle.propTypes = {
    title: PropTypes.string,
    variant: PropTypes.string, 
    component: PropTypes.string
}
