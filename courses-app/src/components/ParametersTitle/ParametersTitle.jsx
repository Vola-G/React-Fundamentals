import Typography from '@material-ui/core/Typography';

export function ParametersTitle({ title, variant, component }) {
    return(
        <Typography gutterBottom variant={variant} component={component}>
            {title}
        </Typography>
    )
}