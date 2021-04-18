import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  marginRight: {
    marginRight: theme.spacing(2),
    width: "auto"
  }
}));

export default function Input({ label }) {
  const classes = useStyles();
    return (
        <TextField
          label={label}
          id="outlined-size-small"
          variant="outlined"
          size="small"
          className={classes.marginRight}
        />
    )
}